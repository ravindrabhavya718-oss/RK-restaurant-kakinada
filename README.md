# RK Restaurant

A full-stack restaurant website for RK Restaurant in Kakinada. It includes the restaurant website, an order API, server-side price validation, and local order storage.

## Local images

Place the supplied restaurant photographs in `assets/images/` using these exact names:

- `hero-food.jpg`
- `special-biryani.jpg`
- `gidda-massore.jpg`
- `village-biryani.jpg`
- `abu-dhabi-fish.jpg`
- `chicken.jpg`
- `chicken-65.jpg`
- `basmati-biryani.jpg`
- `restaurant-interior.jpg`
- `restaurant-exterior.jpg`

Menu-card images can be added manually in `assets/images/menu/` using the lowercase kebab-case paths in the `image` field of `js/script.js`, for example `assets/images/menu/veg-sweet-corn.jpg`. Missing menu images intentionally remain as styled placeholders and never show broken-image icons.

Optional homepage and gallery images can be added manually at `assets/images/hero-food.jpg` and `assets/images/gallery/` using the filenames configured in `index.html` and `js/script.js`. Missing images use the same styled fallback.

Until then, the site displays designed placeholder blocks and never shows broken image icons.

## Updating the menu

Edit the `menuItems` array at the top of `js/script.js`. The 56 supplied menu-card items are included without duplicate names; the two matching existing items retain their original website prices.

## Run locally

Requires Node.js 18 or newer. Start the website and order API from the project folder:

```bash
npm start
```

Open `http://localhost:3000`. Run the API test with `npm test`. The server provides `GET /api/health`, `GET /api/menu`, and `POST /api/orders`. Order totals are calculated from the server's menu catalog; accepted orders are saved to `data/orders.json`, which is excluded from Git because it contains customer information. Orders are then handed to the restaurant through WhatsApp for confirmation. Online payment is not enabled.

Do not expose the local order file publicly or deploy customer-data storage without adding appropriate access controls, retention policies, and a production database.