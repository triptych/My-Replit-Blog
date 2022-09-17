import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
import svelte from '@astrojs/svelte';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [embeds(), preact(), mdx(), tailwind(), svelte()],
  site: `http://astro.build`,
  vite: {
    ssr: {
      noExternal: ["@astro-community/astro-embed-twitter", "@astro-community/astro-embed-youtube"],
    },
  },
});
