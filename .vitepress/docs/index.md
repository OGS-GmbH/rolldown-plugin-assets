---
layout: home
isHome: true

hero:
  text: Assets Plugin
  tagline: A Rolldown plugin that emits static assets (files and directories) to the output directory during the build process.
  actions:
    - theme: brand
      text: Get started
      link: /guide
    - theme: alt
      text: Reference
      link: /reference
    - theme: alt
      text: GitHub
      link: https://github.com/OGS-GmbH/rolldown-plugin-assets

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4.23 20.93A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.7-1.7l-3.6-3.6A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.13"/><path d="M14 2v5a1 1 0 0 0 1 1h5M5 11l-3 3M5 17l-3-3h10"/></svg>
    title: File Emitting
    details: Emit individual static files directly into Rolldown's output directory during the build process.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9 13 2 2 4-4"/></svg>
    title: Directory Support
    details: Recursively emit entire directories, preserving the original folder structure in the output.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1c.33-.33.87-.23.99.21a6 6 0 0 1-8.26 7.06l-7.91 7.91a1 1 0 0 1-3-3l7.91-7.91a6 6 0 0 1 7.06-8.26c.44.12.54.66.22.98z"/></svg>
    title: Custom Output Paths
    details: Map source assets to different destination paths using simple [from, to] tuples for full control over your output.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.7.7l3.6 3.6A2.4 2.4 0 0 1 20 8v5"/><path d="M14 2v5a1 1 0 0 0 1 1h5M10 22v-5M14 19v-2M18 20v-3M2 13h20M6 20v-3"/></svg>
    title: Zero Configuration
    details: Pass a plain string path to emit an asset as-is — no extra setup required for the simple case.
---
