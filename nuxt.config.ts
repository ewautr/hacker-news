import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    app: {
      head: {
        title: 'Hacker News',
        htmlAttrs: {
          lang: 'en',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
      }
    },

    css: ['~/assets/styles/main.scss'],

    vite: {
      plugins: [
        svgLoader()
      ],
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "@/assets/styles/variables.scss"; @import "@/assets/styles/mixins.scss"; @import "@/assets/styles/animations.scss";',
          },
        },
      },
    },
})