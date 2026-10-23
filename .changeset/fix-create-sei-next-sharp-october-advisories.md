---
'@sei-js/create-sei': patch
---

Bump the Next template's `next` and `sharp` pins to clear five newly published advisories.

Five advisories landed against the pinned `next@15.5.25` and the `sharp@0.35.4` override, so every generated app installed them without any change to the template:

- `GHSA-2464-fhr4-w9xw` — critical, unauthenticated remote code execution in the Image Optimization API, `>=10.0.0 <=15.5.27`.
- `GHSA-p3m5-59mp-jv5r` — high, denial of service in the App Router through Server Actions, `>=13.0.0 <=15.5.27`.
- `GHSA-mcj8-r9mp-w47p` and `GHSA-4jqv-mc3x-m676` — moderate, cache poisoning of SSG and ISR pages, `>=15.0.0 <15.5.27`.
- `GHSA-wq5f-xc86-pv6w` — high, a memory bug in Sharp's bundled librsvg (CVE-2026-96889) that can allow remote code execution on glibc-based Linux, `<0.35.5`.

`next` moves `15.5.25` to `15.5.28` and the `sharp` override `0.35.4` to `0.35.5`, both inside their pinned minors.

Next 15.5.28 declares Sharp `^0.34.3 || ^0.35.5`, so the override stays inside the range Next supports. The image notes in the template README and `next.config.mjs` now name `0.35.5` as the advisory floor, because the `0.34.x` half of Next's range is inside both Sharp advisories.

The remaining `decode-uri-component` finding is moderate and does not block the smoke.
