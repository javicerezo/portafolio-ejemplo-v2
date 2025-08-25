import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portafolio-ejemplo-react/',   // cambiamos la referencia base para subir a producción
  build: { outDir: 'docs' },            // Hacemos que npm build genere la carpeta 'dist' dentro 'portafolio-ejemplo-react/docs' para subirla a producción
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // ← alias a src
    },
  },
});