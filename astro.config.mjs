import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import node from '@astrojs/node';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    },
  }), react(), icon()],
  // output: 'server',
  // adapter: node({
  //   mode: 'middleware',
  // }),
});