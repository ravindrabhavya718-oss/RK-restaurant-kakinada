const http = require('node:http');
const fs = require('node:fs/promises');
const fsSync = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { randomUUID } = require('node:crypto');

const ROOT = __dirname;
const SCRIPT_FILE = path.join(ROOT, 'js', 'script.js');
const DEFAULT_ORDERS_FILE = path.join(ROOT, 'data', 'orders.json');
const DELIVERY_FEE = 40;
const MAX_BODY_BYTES = 32 * 1024;
const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function loadMenu() {
  const source = fsSync.readFileSync(SCRIPT_FILE, 'utf8');
  const match = source.match(/const menuItems\s*=\s*(\[[\s\S]*?\]);\s*\r?\n\s*const menuGrid/);
  if (!match) throw new Error('Could not load menuItems from js/script.js.');
  return vm.runInNewContext(match[1], Object.create(null), { timeout: 500 });
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(body));
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error('Order request is too large.');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('Request body must be valid JSON.');
    error.statusCode = 400;
    throw error;
  }
}

function validateOrder(payload, menu) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { error: 'Order details are required.' };
  }

  const customerName = typeof payload.customerName === 'string' ? payload.customerName.trim() : '';
  const phone = typeof payload.mobile === 'string' ? payload.mobile.replace(/\D/g, '') : '';
  const orderType = payload.orderType;
  const address = typeof payload.address === 'string' ? payload.address.trim() : '';
  const instructions = typeof payload.instructions === 'string' ? payload.instructions.trim() : '';

  if (customerName.length < 2 || customerName.length > 80) return { error: 'Enter a name between 2 and 80 characters.' };
  if (!/^\d{10}$/.test(phone) && !/^91\d{10}$/.test(phone)) return { error: 'Enter a valid 10-digit mobile number.' };
  if (!['Delivery', 'Pickup'].includes(orderType)) return { error: 'Choose delivery or pickup.' };
  if (orderType === 'Delivery' && (address.length < 5 || address.length > 500)) return { error: 'Enter a delivery address between 5 and 500 characters.' };
  if (instructions.length > 500) return { error: 'Special instructions must be 500 characters or fewer.' };
  if (!Array.isArray(payload.items) || payload.items.length < 1 || payload.items.length > 30) return { error: 'Add between 1 and 30 menu items.' };

  const menuById = new Map(menu.map((item) => [item.id, item]));
  const seenIds = new Set();
  const items = [];
  for (const entry of payload.items) {
    if (!entry || typeof entry.id !== 'string' || !Number.isInteger(entry.quantity) || entry.quantity < 1 || entry.quantity > 20) {
      return { error: 'Each item needs a valid menu selection and quantity.' };
    }
    const item = menuById.get(entry.id);
    if (!item || seenIds.has(entry.id)) return { error: 'The order contains an unknown or duplicate menu item.' };
    seenIds.add(entry.id);
    items.push({ id: item.id, name: item.name, quantity: entry.quantity, unitPrice: item.price, lineTotal: item.price * entry.quantity });
  }

  const subtotal = items.reduce((total, item) => total + item.lineTotal, 0);
  const delivery = orderType === 'Delivery' ? DELIVERY_FEE : 0;
  return {
    order: {
      customerName,
      mobile: phone.slice(-10),
      orderType,
      address: orderType === 'Delivery' ? address : '',
      instructions,
      items,
      subtotal,
      delivery,
      total: subtotal + delivery,
    },
  };
}

function createServer({ ordersFile = DEFAULT_ORDERS_FILE } = {}) {
  const menu = loadMenu();
  const resolvedOrdersFile = path.resolve(ordersFile);
  let writeQueue = Promise.resolve();

  async function saveOrder(order) {
    writeQueue = writeQueue.then(async () => {
      await fs.mkdir(path.dirname(resolvedOrdersFile), { recursive: true });
      let orders = [];
      try {
        orders = JSON.parse(await fs.readFile(resolvedOrdersFile, 'utf8'));
        if (!Array.isArray(orders)) throw new Error('Order store must contain an array.');
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      orders.push(order);
      const temporaryFile = `${resolvedOrdersFile}.${process.pid}.tmp`;
      await fs.writeFile(temporaryFile, JSON.stringify(orders, null, 2), 'utf8');
      await fs.rename(temporaryFile, resolvedOrdersFile);
    });
    return writeQueue;
  }

  return http.createServer(async (request, response) => {
    const requestUrl = new URL(request.url, 'http://localhost');
    const pathname = requestUrl.pathname;

    if (request.method === 'GET' && pathname === '/api/health') {
      return sendJson(response, 200, { status: 'ok', menuItems: menu.length });
    }

    if (request.method === 'GET' && pathname === '/api/menu') {
      return sendJson(response, 200, menu);
    }

    if (request.method === 'POST' && pathname === '/api/orders') {
      try {
        const payload = await readJsonBody(request);
        const result = validateOrder(payload, menu);
        if (result.error) return sendJson(response, 400, { error: result.error });

        const order = {
          id: `RK-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${randomUUID().slice(0, 6).toUpperCase()}`,
          status: 'pending',
          createdAt: new Date().toISOString(),
          ...result.order,
        };
        await saveOrder(order);
        return sendJson(response, 201, { id: order.id, status: order.status, total: order.total });
      } catch (error) {
        return sendJson(response, error.statusCode || 500, {
          error: error.statusCode ? error.message : 'Order could not be saved. Please try again.',
        });
      }
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { Allow: 'GET, HEAD, POST', 'Content-Type': 'text/plain; charset=utf-8' });
      return response.end('Method not allowed.');
    }

    let decodedPath;
    try {
      decodedPath = decodeURIComponent(pathname);
    } catch {
      response.writeHead(400);
      return response.end('Bad request.');
    }
    if (!(decodedPath === '/' || decodedPath === '/index.html' || /^\/(css|js|assets)\//.test(decodedPath))) {
      response.writeHead(404);
      return response.end('Not found.');
    }

    const filePath = path.resolve(ROOT, `.${decodedPath === '/' ? '/index.html' : decodedPath}`);
    if (!filePath.startsWith(`${ROOT}${path.sep}`)) {
      response.writeHead(403);
      return response.end('Forbidden.');
    }

    try {
      const file = await fs.readFile(filePath);
      response.writeHead(200, {
        'Cache-Control': 'no-cache',
        'Content-Type': MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
        'X-Content-Type-Options': 'nosniff',
      });
      return response.end(request.method === 'HEAD' ? undefined : file);
    } catch (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500);
      return response.end(error.code === 'ENOENT' ? 'Not found.' : 'Unable to read file.');
    }
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createServer().listen(port, () => {
    console.log(`RK Restaurant is running at http://localhost:${port}`);
  });
}

module.exports = { createServer, validateOrder };
