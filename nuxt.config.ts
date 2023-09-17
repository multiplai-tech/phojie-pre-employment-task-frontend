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
    // '/': { prerender: true },
    '/tasks/**': { ssr: false },
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
    preference: 'dark',
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
