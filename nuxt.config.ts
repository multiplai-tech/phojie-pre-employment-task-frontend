export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },

  modules: [
    '@una-ui/nuxt',
    'nuxt-security',
    '~/modules/build-env',
    '@pinia/nuxt',
    'nuxt-sanctum-auth',
    // nuxt-vitest
  ],

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
        // open graph social image
        { property: 'og:type', content: 'website' },
        { property: 'og:image:width', content: '3800' },
        { property: 'og:image:height', content: '1900' },
        { property: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  css: [
    '~/styles/base.css',
  ],

  devtools: { enabled: true },

  nuxtSanctumAuth: {
    baseUrl: 'http://localhost:8000',
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/api/v1/auth/login',
      logout: '/api/v1/auth/logout',
      user: '/api/v1/user',
    },
    csrf: {
      headerKey: 'X-XSRF-TOKEN',
      cookieKey: 'XSRF-TOKEN',
      tokenCookieKey: 'nuxt-sanctum-auth-token',
    },
    redirects: {
      home: '/',
      login: '/login',
      logout: '/',
    },
  },
})
