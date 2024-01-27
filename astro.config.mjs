import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  redirects: {
    "/map":
      "https://www.fullerton.edu/campusmap/_resources/pdf/CSUF-CAMPUS-MAP.pdf",
  },
});
