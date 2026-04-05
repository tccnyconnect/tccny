// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';


import { webcore } from 'webcoreui/integration'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Replace with your site URL
  integrations: [
    tailwind(),
    sitemap(),
    webcore()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
      vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    }
});

