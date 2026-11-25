import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  server: { open: true, host: true },
  build: {
    rollupOptions: {
      input: {
        main: r('./index.html'),
        portfolio: r('./portfolio.html'),
        pricing: r('./pricing.html'),
        about: r('./about.html'),
        contact: r('./contact.html')
      }
    }
  }
});
