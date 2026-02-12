// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [
        '/',
        '/login',
        '/criar-conta',
        '/docs',
        '/recuperar-senha',
        '/confirm',
        '/callback',
        '/resetPasswordForEmail',
      ],
    },
  },
})