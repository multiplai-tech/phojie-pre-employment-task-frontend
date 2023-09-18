import { pwa } from './config/pwa'
import { security } from './config/security'

export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },

  modules: [
    '@una-ui/nuxt',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    // ...(isDevelopment) ? [] : ['nuxt-security'],
    '~/modules/build-env', // used for CI/CD stuff
    // 🚧 nuxt-vitest, might be out of time for this one
  ],

  routeRules: {
    '/tasks/**': { ssr: false },
    // eslint-disable-next-line n/prefer-global/process
    '/api/**': { proxy: { to: `${process.env.NUXT_PUBLIC_API_URL || 'http://localhost'}/api/v1/**` } },
    // eslint-disable-next-line n/prefer-global/process
    '/sanctum/csrf-cookie': { proxy: { to: `${process.env.NUXT_PUBLIC_API_URL || 'http://localhost'}/sanctum/csrf-cookie` } },
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
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', content: '#ffffff' },
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
      './stores/*.ts',
    ],
    injectAtEnd: true,
  },

  pwa,
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore nuxt-security is conditional
  security,
})
