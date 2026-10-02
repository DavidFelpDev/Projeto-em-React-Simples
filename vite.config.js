import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages em https://usuario.github.io/NOME-DO-REPO/
// troque base por '/NOME-DO-REPO/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
