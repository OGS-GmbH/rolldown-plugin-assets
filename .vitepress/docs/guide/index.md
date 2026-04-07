---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add -D @ogs-gmbh/rolldown-plugin-assets
```

```sh [pnpm]
$ pnpm add -D @ogs-gmbh/rolldown-plugin-assets
```

```sh [yarn]
$ yarn add -D @ogs-gmbh/rolldown-plugin-assets
```

```sh [bun]
$ bun add -D @ogs-gmbh/rolldown-plugin-assets
```

:::

### Usage

`rolldown-plugin-assets` can be integrated with either [`tsdown`](https://tsdown.dev/) or [`Rolldown`](https://rolldown.rs/). Here's an example showing the usage of this plugin with `tsdown`. You can get a deeper understanding about this plugin by taking a look into the [reference](/reference).

```ts [tsdown.config.ts]
import { defineConfig } from "tsdown";
import { assetsPlugin } from "@ogs-gmbh/rolldown-plugin-assets";

export default defineConfig({
  entry: "src/**/*.ts",
  dts: true,
  outDir: "dist/main",
  unbundle: true,
  plugins: [assetsPlugin(["README.md", ["public/asset.png", "asset.png"]])]
});
```
