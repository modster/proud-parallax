import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), tailwind(), mdx()],
  output: "server",
  adapter: vercel()
});