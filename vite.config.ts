import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

/**
 * Resolve the public base path.
 *
 * - On GitHub Actions, GITHUB_REPOSITORY is provided automatically, so the
 *   project builds for https://USERNAME.github.io/REPOSITORY/ without extra
 *   configuration.
 * - User/organisation pages (USERNAME.github.io) are served from the root.
 * - Local development and `npm run build` default to "/".
 * - VITE_BASE overrides everything (useful for custom domains or manual builds).
 */
function resolveBase(): string {
  if (process.env.VITE_BASE) {
    return process.env.VITE_BASE.endsWith('/')
      ? process.env.VITE_BASE
      : `${process.env.VITE_BASE}/`
  }

  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) return '/'

  const [owner, name] = repository.split('/')
  if (!owner || !name) return '/'
  if (name.toLowerCase() === `${owner.toLowerCase()}.github.io`) return '/'

  return `/${name}/`
}

const base = resolveBase()

/**
 * GitHub Pages serves static files only. When a direct request for a nested
 * route (for example /games/game1) reaches the server, it returns 404.html.
 * That file remembers the requested URL and redirects to the app shell, which
 * restores the route. This keeps clean URLs and browser refreshes working.
 */
function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: `<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Circolo dei Piccioni</title>
    <script>
      (function () {
        try {
          sessionStorage.setItem(
            'cdp-spa-redirect',
            window.location.pathname + window.location.search + window.location.hash
          );
        } catch (error) {
          /* sessionStorage can be unavailable in strict privacy modes. */
        }
        window.location.replace(${JSON.stringify(base)});
      })();
    </script>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f5eee1; color: #2c1a12; font-family: system-ui, sans-serif; }
      a { color: #b44a26; font-weight: 600; }
    </style>
  </head>
  <body>
    <p>Reindirizzamento in corso… <a href="${base}">Apri il sito</a></p>
  </body>
</html>
`,
      })
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), githubPagesSpaFallback()],
  resolve: {
    alias: {
      '@mediapipe/pose': fileURLToPath(
        new URL('./src/mocks/mediapipe-pose.js', import.meta.url),
      ),
    },
  },
  optimizeDeps: {
    exclude: ['@mediapipe/pose'],
  },
})
