import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "/codewithtechno-website/",
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });


export default defineConfig({
  base: "/codewithtechno-website/",
  plugins: [react()],
});
