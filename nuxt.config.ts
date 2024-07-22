// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // 網站標題設定
  app: {
    head: {
      title: "拚拚 - 募資平臺切版練習",
    },
  },
  // 使用到的套件
  modules: [
    "usebootstrap",
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
    "@vesp/nuxt-fontawesome",
  ],
  // 網站上使用到的字型（來自 @nuxtjs/google-fonts）
  googleFonts: {
    families: {
      "Noto+Sans+TC": true,
      "Baloo+Tamma+2": true,
    },
    display: "swap",
  },
  // 增加 Font Awesome icon 到網站上
  fontawesome: {
    icons: {
      solid: ["heart", "share-nodes"],
    },
  },
});
