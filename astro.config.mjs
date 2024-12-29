import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://bouakiltoufik.github.io/cv/', // Notez le "/" final
  base: '/cv/', // Le chemin de base doit commencer et se terminer par "/"
  trailingSlash: 'always', // Assurez-vous que ce paramètre correspond à vos besoins
  integrations: [tailwind()],
});
