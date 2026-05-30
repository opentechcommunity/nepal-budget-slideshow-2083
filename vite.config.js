import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment and update the base path when deploying to GitHub Pages
  // base: '/nepal-budget-slideshow/', // Replace with your repository name
})
