import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portafolio-ejemplo-react/',   // cambiamos la referencia base para subir a producción
  build: { outDir: 'docs' }             // Hacemos que npm build genere la carpeta 'dist' dentro 'portafolio-ejemplo-react/docs' para subirla a producción
})
