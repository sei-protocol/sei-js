---
'@sei-js/create-sei': patch
---

Bump the Next template's `next` and `sharp` pins to clear three newly published advisories.

The generated-app smoke audits every variant and fails on any high or critical finding. Three advisories landed against the pinned versions, so the check went red without any change to the template:

- `GHSA-p293-qw3h-jr36` — critical, unauthenticated RCE on Windows-hosted Next.js servers, `>=13.4.0 <15.5.24`.
- `GHSA-2xp9-vwfh-vxw4` — critical, unauthenticated RCE in the Image Optimization API when AVIF files are used, `>=10.0.0 <15.5.24`.
- `GHSA-rgj7-g3m4-5g8c` — high, heap overflow in Sharp's bundled libheif decoder, `<0.35.4`.

`next` moves `15.5.21` to `15.5.25` and the `sharp` override `0.35.3` to `0.35.4`, both inside their pinned minors. Next 15.5.25 also widened its own Sharp declaration to `^0.34.3 || ^0.35.4`, so the pinned override now sits inside the range Next supports; the image notes in the template README and `next.config.mjs` said the opposite and are corrected. Images stay unoptimized, which is now a choice about not requiring a native Sharp build rather than a security tradeoff.

The remaining `decode-uri-component` finding is moderate and does not block the smoke.
