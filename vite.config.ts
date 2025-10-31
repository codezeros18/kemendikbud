import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      try {
        copyFileSync(`${dist}/index.html`, `${dist}/404.html`)
        console.log('✅ Created 404.html fallback for GitHub Pages')
      } catch (e) {
        console.warn('⚠️ Could not create 404.html', e)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  base: '/kemendikbud/',
})
