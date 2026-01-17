import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/weather_app/', // tämä on tärkeä
  plugins: [react()],
})