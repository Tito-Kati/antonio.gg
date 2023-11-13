import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Site Metadata
  title: 'Antonio Gonzalez Gea - Desarrollador Full Stack',
  description: 'Portfolio de Antonio Gonzalez Gea, desarrollador full stack y aficionado a la impresión 3D. Mi' +
    ' trayectoria profesional en desarrollo, mis creaciones en impresión 3D y otros hobbies que inspiran mi trabajo.',
  lang: 'es',

  // Routing
  cleanUrls: true,

  // Build
  srcDir: 'pages',
  assetsDir: 'public',
})
