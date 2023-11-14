import Layout from './Layout.vue'
import '@/styles/index.scss'

/** @type {import('vitepress').Theme} */
const Theme = {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

export default Theme

