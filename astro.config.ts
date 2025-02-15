import { defineConfig } from "astro/config";

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
    "/mentions-legales": "/",
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
});
