import { defineConfig } from 'vitepress'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Site Metadata
  title: 'Antonio Gonzalez Gea - Desarrollador Full Stack',
  description:
    'Portfolio de Antonio Gonzalez Gea, desarrollador full stack y aficionado a la impresión 3D. Mi trayectoria' +
    ' profesional en desarrollo, mis creaciones en impresión 3D y otros hobbies que inspiran mi trabajo.',
  lang: 'es',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' },
    ],
  ],

  // Routing
  cleanUrls: true,

  // Build
  srcDir: 'pages',
  sitemap: {
    hostname: 'https://antonio.gg',
  },

  // Markdown
  markdown: {
    // TODO: enable lineNumbers: true,

    container: {
      tipLabel: 'Consejo',
      warningLabel: 'Advertencia',
      dangerLabel: 'Peligro',
      infoLabel: 'Información',
      detailsLabel: 'Detalles',
    },
  },

  // Vite
  vite: {
    publicDir: '../public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..'),
      },
    },
  },
})
