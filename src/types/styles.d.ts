declare module "*.css";

// flipbook-js ships types at dist/flipbook.d.ts but its package.json
// "exports" map omits a "types" condition, so TS can't resolve them.
declare module "flipbook-js" {
  export * from "flipbook-js/dist/flipbook.d.ts";
  export { default } from "flipbook-js/dist/flipbook.d.ts";
}

