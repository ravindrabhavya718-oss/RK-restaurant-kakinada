const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { createServer } = require('../server');

test('API validates orders, uses menu prices, and persists valid orders', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'rk-restaurant-'));
  const ordersFile = path.join(directory, 'orders.json');
  const server = createServer({ ordersFile });

  try {
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const baseUrl = `http://127.0.0.1:${server.address().port}`;
    const health = await fetch(`${baseUrl}/api/health`).then((response) => response.json());
    assert.equal(health.status, 'ok');

    const menu = await fetch(`${baseUrl}/api/menu`).then((response) => response.json());
    assert.ok(menu.length >= 1);
    assert.equal(health.menuItems, menu.length);

    const invalidResponse = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: 'Customer',
        mobile: '9848643747',
        orderType: 'Pickup',
        items: [{ id: 'not-a-menu-item', quantity: 1 }],
      }),
    });
    assert.equal(invalidResponse.status, 400);

    const item = menu[0];
    const orderResponse = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: 'Customer',
        mobile: '9848643747',
        orderType: 'Delivery',
        address: 'Kakinada',
        items: [{ id: item.id, quantity: 2, unitPrice: 1 }],
      }),
    });
    assert.equal(orderResponse.status, 201);

    const result = await orderResponse.json();
    assert.equal(result.total, item.price * 2 + 40);
    const savedOrders = JSON.parse(await fs.readFile(ordersFile, 'utf8'));
    assert.equal(savedOrders.length, 1);
    assert.equal(savedOrders[0].id, result.id);
    assert.equal(savedOrders[0].items[0].unitPrice, item.price);
  } finally {
    await new Promise((resolve) => server.close(resolve));
    await fs.rm(directory, { recursive: true, force: true });
  }
});
