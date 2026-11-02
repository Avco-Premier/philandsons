# quickbuild report — Phil & Sons on Main Italian restaurant and pizzeria

Built 2026-11-02 · 1 gate round(s) · **0 FAIL · 8 WARN**

## Warnings

- Inputs · Geo precision (site): business.geo has 4 decimals; copy 5+ from the GBP pin (4 decimals ≈ 11 m off)
- Inputs · Trust (E-E-A-T) inputs (site): Missing or thin: owner/founder names; opening year. Ask the client — never invent these.
- Inputs · Analytics configured (site): site.analytics.ga4Id is empty — the site will launch without traffic data
- Inputs · Featured items described (site): Every featured dish needs a menu description; signature items with no description waste the homepage's best slot
- Images · Image weight (/about/): square-pizza.DrK3_FN7_ZJ3CkC.jpg is 269 KB
- Content · No repeated facts (/faq/): Stated 4+ times: '$14.20' ×4, '$8.20' ×9, '$8.25' ×5, '$7.20' ×9, '$9.50' ×7, '$10.50' ×5 — say each fact once, where it's most useful
- On-Page · No duplicate headings (/menu/): Repeated: baked ziti, weekend pasta special, pizza night special
- Technical · No inline scripts (CSP) (/menu/): Inline <script> found; move it to a file so CSP can stay script-src 'self'

## Generic text in use (replace with the owner's words when you have them)

- `business.known_for`
- `business.story`

## Answers that would make the site stronger

- `business.founding_year` — Year it opened (blank if unknown)
- `business.founding_date` — Exact opening date YYYY-MM-DD or YYYY-MM (blank if unknown)
- `business.description` — One factual sentence: what it is, where, since when
- `ordering.delivery_fee` — Delivery fee, e.g. '$3.99'
- `menu.dietary_note` — Dietary / allergy note that is TRUE (e.g. 'Gluten-free toast +$2; not a gluten-free kitchen.')
- `visit.arrival` — Best time to come / waits
- `visit.pickup` — Where to pick up online orders
- `amenities.wifi` — Free Wi-Fi?
- `amenities.high_chairs` — High chairs?
- `founders` — Owners / chefs
- `extra_faq` — Extra questions guests ask (optional)

## Next

- `npm run preview:bg` then open http://127.0.0.1:4321/ (stop with `npm run preview:stop`)
- Full gate: `npm run preview:bg && npm run check:full; npm run preview:stop`
- Deploy: see references/launch.md (Vercel, `VERCEL_DEEP_CLONE=true`)
