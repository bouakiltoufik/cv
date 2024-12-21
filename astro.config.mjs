import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://bouakiltoufik.github.io',
  base: 'cv',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
