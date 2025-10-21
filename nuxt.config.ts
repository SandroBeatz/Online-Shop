// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/google-fonts',
  ],

  css: ['~/app/assets/css/main.css'],

  googleFonts: {
    families: {
      Nunito: true
    }
  },

  hooks: {
    'pages:extend'(pages) {
      // For Home page set path to '/' instead of '/home'
      const homeIndex = pages.find(page => page.path === '/home')
      if (homeIndex) {
        homeIndex.path = '/'
      }
    }
  },

  components: [
    { path: '~/app/ui', prefix: 'App', extensions: ['.vue', '.ts'] },
  ],

  imports: {
    dirs: ['~/shared/composables', '~/shared/types'],
  },
})
