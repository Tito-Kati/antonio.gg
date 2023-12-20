import { defineConfig } from 'vitepress'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Site Metadata
  title: 'Antonio Gonzalez Gea',
  description:
    'Portfolio de Antonio González Gea, desarrollador full stack y entusiasta de la impresión 3D.' +
    ' Explora mi carrera y proyectos.',
  lang: 'es',
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' },
    ],
    [
      'meta',
      { property: 'og:type', content: 'website' },
    ],
    [
      'meta',
      { property: 'og:image', content: '/images/og-image.png' },
    ],
  ],
  transformHead(context) {
    const canonical = context.page.replace(/(index)?\.md$/, '')

    return [
      [
        'meta',
        { property: 'og:title', content: context.title },
      ],
      [
        'meta',
        { property: 'og:url', content: `https://antonio.gg/${canonical}` },
      ],
      [
        'link',
        { rel: 'canonical', href: `https://antonio.gg/${canonical}` },
      ],
    ]
  },

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
