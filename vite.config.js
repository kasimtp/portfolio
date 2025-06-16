import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// TailwindCSS plugin വേണ്ട, കാരണം PostCSS വഴി connect ചെയ്യും.

export default defineConfig({
  plugins: [react()],
})
