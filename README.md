# DuraCube product page layout mock-up

Approved product-page layout expanded across the complete live DuraCube catalogue.

## Included

- 39 live catalogue product destinations plus the approved End of Trip page
- Complete Products mega menu with live DuraCube product imagery
- Hash-based product routes that work on GitHub Pages
- Approved SEO headings, metadata and body copy for partitioning, lockers and End of Trip
- Live-site copy adapted for bench seating, privacy panels, vanities, laminate and hardware
- Responsive desktop and mobile product navigation
- Live case-study imagery with an explicit placeholder note where product-level project tagging is not confirmed

Product content and routing are centralised in `src/productData.ts`. The shared layout and interactions are in `src/App.tsx`.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm run build
```

## Deployment

The existing GitHub Pages workflow builds and deploys the project from the `main` branch.
