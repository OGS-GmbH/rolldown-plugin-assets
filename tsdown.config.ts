import { defineConfig } from "tsdown";
import packageJson from "./package.json" with { type: "json" };

const repositoryName = packageJson.name.split("/").pop();

const copyrightBanner = `
/*!
 * Copyright (c) 2026 — present OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH
 * Licensed under ${packageJson.license} (See https://github.com/OGS-GmbH/${repositoryName}/LICENSE)
 */
`;

export default defineConfig({
  platform: "neutral",
  entry: "src/**/*.ts",
  dts: {
    enabled: true,
    sourcemap: true
  },
  outDir: "dist/main",
  unbundle: false,
  sourcemap: true,
  deps: { skipNodeModulesBundle: true, neverBundle: [/.*/] },
  banner: copyrightBanner
});
