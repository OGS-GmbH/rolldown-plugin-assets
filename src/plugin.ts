import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { Plugin, PluginContext } from "rolldown";
import { handleDirectory, handleFile } from "./handlers.js";
import { Options } from "./types.js";

/**
 * A Rollup plugin that emits assets
 *
 * @param options - An `Object` to configure {@link Options} for the plugin's behavior.
 * @returns A Rollup plugin that emits assets.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Plugin
 */
function assetsPlugin(options: Options): Plugin {
  const cwd = process.cwd();

  return {
    name: "assets-plugin",
    generateBundle: function (this: PluginContext) {
      for (const asset of options) {
        let from;
        let to;

        if (typeof asset === "string") {
          from = asset;
          to = asset;
        } else {
          from = asset[0];
          to = asset[1];
        }

        const fromPath = path.join(cwd, from);
        let stats;

        try {
          stats = fs.statSync(fromPath);
        } catch {
          continue;
        }

        if (stats.isDirectory()) {
          handleDirectory.call(this, cwd, from, to);

          continue;
        }

        if (stats.isFile()) {
          handleFile.call(this, cwd, from, to);

          continue;
        }
      }
    }
  };
}

export { assetsPlugin };
