export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hujimori-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/prism'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ].concat(process.env.NODE_ENV === 'production' ? [] : ['@nuxtjs/eslint-module']),

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-microcms-module'
  ],

  markdownit: {
    html: true,
    injected: true,
    preset: 'default'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  content: {

  },

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all'
  },

  target: 'static'
}
