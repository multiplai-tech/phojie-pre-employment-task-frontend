import { pwa } from './config/pwa'

export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        target: 3.3,
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  routeRules: {
    '/': { prerender: true },
  },

  modules: [
    '@una-ui/nuxt',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    // nuxt-vitest, might be out of time for this one

    '~/modules/build-env', // used for CI/CD stuff
  ],

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
  ],

  colorMode: {
    preference: 'dark',
  },

  devtools: { enabled: true },

  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate',
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
