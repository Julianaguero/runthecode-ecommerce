import { defineConfig, Plugin } from 'vite'
import './env';
import react from '@vitejs/plugin-react-swc'


function useCredentials(): Plugin {
  return {
    name: 'remove-module',
    apply: 'build',
    transformIndexHtml(html: string) {
      return html.replace('crossorigin', 'defer')
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  plugins: [react(), useCredentials()],
  base: import.meta.env.VITE_BASE_URL || '/',
})