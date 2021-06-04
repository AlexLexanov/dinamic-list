export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Dynamic List',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['./assets/tailwind.css'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/fontawesome'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: [
        'faHome',
        'faHeart',
        'faChevronDown',
        'faPlay',
        'faPause',
        'faPhone'
      ]
    }
  },
  tailwindcss: {
    config: {
      purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
          'components/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.js',
          'nuxt.config.js'
        ]
      },
      darkMode: 'media',
      theme: {
        extend: {
          animation: {
            fadeInDown: 'fadeInDown 1s'
          },
          keyframes: {
            fadeInDown: {
              'from': {
                opacity: 0,
                transform: 'translate3d(0, -5%, 0)'
              },
              'to': {
                opacity: 1,
                transform: 'translate3d(0, 0, 0)'
              },
            }
          }
        }
      },
    }
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  }
}
