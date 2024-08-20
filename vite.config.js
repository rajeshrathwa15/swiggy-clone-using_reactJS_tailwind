import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://rajeshrathwa15.github.io/swiggy-clone-using_reactJS_tailwind/dist', // Ensure this is correct
});
