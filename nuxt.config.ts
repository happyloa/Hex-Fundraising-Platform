// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["usebootstrap", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Noto+Sans+TC": true,
    },
    display: "swap",
  },
});
