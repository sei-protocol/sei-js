---
'@sei-js/sei-global-wallet': patch
---

Raise the documented `axios` override to `1.20.0` to clear the Axios advisories published on 2026-09-30.

Twelve advisories published that day cover every Axios release below `1.20.0`, including the `1.18.0` the [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) blocks pinned, so the nightly consumer run went red without any change in this repository. The wallet-only npm consumer, which is held to a strictly clean audit, reported nine findings: `axios` itself and the eight Dynamic packages above it in the dependency chain.

Every one of them is patched in `1.20.0` and still open in `1.19.0`:

- High: `GHSA-3pq3-5fj3-cg6v`, `GHSA-542g-h47m-68v8`, `GHSA-c29m-xwm3-cm6r`, `GHSA-m8m8-qj5v-23w3`, `GHSA-mghh-pgcx-3jjj`, `GHSA-r4gj-5m52-g5wh`, `GHSA-x97p-jq2g-jp4f`.
- Medium: `GHSA-44g4-m2mj-wpvx`, `GHSA-4hqw-qxg8-jxx2`, `GHSA-9fr6-4gfg-395g`, `GHSA-j8rh-479h-cp32`, `GHSA-vh66-26gq-q6x8`.

Dynamic still pins `axios@1.16.0` exactly, so the correction stays a root override. All three blocks now carry `"axios": "1.20.0"`, the first release outside every advisory reported against that pin. It ships the same exports and dependencies as `1.18.0`, apart from raising the `form-data` floor to `^4.0.6`.

The README's Axios note described only the Node HTTP adapter issue that `1.18.0` cleared. It now covers the current set: the high-severity issues are in Node-only transports or are prototype-pollution gadgets, and the `toFormData` and fetch-adapter gadgets also apply in browsers.

No published dependency or peer range changes.
