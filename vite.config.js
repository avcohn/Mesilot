import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// אם מעלים ל-GitHub Pages תחת תת-תיקייה (למשל /masilot-newsletter/)
// יש לשנות את base לשם המאגר: base: '/masilot-newsletter/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});
