import { pwa } from './config/pwa'

export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },

  modules: [
    '@una-ui/nuxt',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    // nuxt-vitest, might be out of time for this one

    '~/modules/build-env', // used for CI/CD stuff
  ],

  routeRules: {
    '/tasks/**': { ssr: false },
    // eslint-disable-next-line n/prefer-global/process
    '/api/**': { proxy: { to: `${process.env.NUXT_PUBLIC_API_URL}/api/v1/**` }, cors: true },
    // eslint-disable-next-line n/prefer-global/process
    '/sanctum/csrf-cookie': { proxy: { to: `${process.env.NUXT_PUBLIC_API_URL}/sanctum/csrf-cookie` }, cors: true },
  },

  runtimeConfig: {
    public: {
      frontendUrl: '',
      backendUrl: '',
      apiBase: '',
    },
  },

  app: {
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  css: [
    '~/styles/base.css',
    '~/styles/vars.css',
  ],

  colorMode: {
    preference: 'light',
  },

  devtools: { enabled: false },

  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate',
      'storeToRefs',
    ],
  },

  imports: {
    dirs: [
      // We need to import the store directory so that Pinia can auto-import
      './store/*.ts',
    ],
    injectAtEnd: true,
  },

  pwa,
})
