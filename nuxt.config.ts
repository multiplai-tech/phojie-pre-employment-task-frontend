// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@una-ui/nuxt',
  ],

  css: [
    '~/styles/base.css',
  ],

  devtools: { enabled: true },
})
