import microcms from 'nuxt-microcms-module'
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

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page'
      })
    }
  },

  generate: {
    async routes () {
      const limit = 10
      const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

      const pages = await microcms.get({
        endpoint: 'articles',
        queries: { limit: 20 }
      }).then(res =>
        range(1, Math.ceil(res.data.totalCount / limit)).map(p => ({
          route: `/page/${p}`
        }))
      )
      return pages
    }
  },

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
