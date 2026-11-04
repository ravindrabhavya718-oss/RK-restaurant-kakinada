# RK Restaurant

A full-stack restaurant website for RK Restaurant in Kakinada. It includes the restaurant website, an order API, server-side price validation, and local order storage.

## Local images

Nineteen AI-generated food, hero and dining-ambience photos are stored locally in `assets/images/` and `assets/images/menu/` (generated with Pollinations.ai). Menu cards and customer favourites use 15 category-matched paths in `categoryImagePaths` in `js/script.js`; gallery food entries reuse those photos. Restaurant exterior and interior scenes are illustrative concepts, not photographs of the actual premises.

## Updating the menu

Edit the `menuItems` array at the top of `js/script.js`. The supplied menu-card items are included without duplicate names, and existing website prices are retained.

## Run locally

Requires Node.js 18 or newer. Start the website and order API from the project folder:

```bash
npm start
```

Open `http://localhost:3000`. Run the API test with `npm test`. The server provides `GET /api/health`, `GET /api/menu`, and `POST /api/orders`. Order totals are calculated from the server's menu catalog; accepted orders are saved to `data/orders.json`, which is excluded from Git because it contains customer information. Orders are then handed to the restaurant through WhatsApp for confirmation. Online payment is not enabled.

Do not expose the local order file publicly or deploy customer-data storage without adding appropriate access controls, retention policies, and a production database.