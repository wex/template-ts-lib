# Template for basic TypeScript library

Very basic template to create JS libraries with TS easily.

## Usage

- `npm run dev` all changes will trigger rebuild.
- `npm run test` will run all `*.test.ts` files with `vitest`
- `npm run build` will build production ready files under `dist/`
- `npm run test:watch` all changes will trigger retest.

## Publishing package

1. Make required changes to `package.json` (dist-files + name + metainfo)
2. `npm login`
3. `npm publish`
