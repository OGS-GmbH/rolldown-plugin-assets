import fs from "node:fs";
import path from "node:path";
import { PluginContext } from "rolldown";

function handleFile(this: PluginContext, cwd: string, from: string, to: string) {
  const fromPath = path.join(cwd, from);

  const source = fs.readFileSync(fromPath, {
    encoding: "utf8"
  });

  this.emitFile({
    type: "asset",
    fileName: to,
    originalFileName: from,
    source
  });
}

function handleDirectory(this: PluginContext, cwd: string, from: string, to: string) {
  const fromPath = path.join(cwd, from);

  const files = fs.readdirSync(fromPath, {
    recursive: true,
    encoding: "utf8"
  });

  for (const file of files) {
    const fromPathWithFile = path.join(fromPath, file);
    const stats = fs.statSync(fromPathWithFile);

    if (!stats.isFile()) continue;

    const fromWithFile = path.join(from, file);
    const toWithFile = path.join(to, file);

    handleFile.call(this, cwd, fromWithFile, toWithFile);
  }
}

export { handleFile, handleDirectory };
