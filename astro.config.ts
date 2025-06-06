import { defineConfig } from "astro/config";

const KB = 1024;

// https://astro.build/config
export default defineConfig({
  site: "https://arthaudproust.fr",
  redirects: {
    "/galleries": "/",
    "/galleries/architecture": "/",
    "/galleries/portraits": "/",
    "/galleries/street": "/",
    "/lab": "/",
    "/references": "/",
    "/resources": "/",
    "/readings": "/",
    "/projects": "/",
    "/site-map": "/",
    "/projects/nuit-du-musba": "/",
    "/projects/life": "/",
    "/projects/escalade-montesquieu": "/",
    "/projects/sista": "/",
    "/projects/too-well-stolen": "/",
    "/projects/web-dressing": "/",
    "/projects/preview": "/",
    "/projects/porte-telephone-en-bois": "/",
  },
  vite: {
    build: {
      assetsInlineLimit: 10 * KB,
    },
  },
});
