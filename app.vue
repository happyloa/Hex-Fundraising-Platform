<script setup>
useHead({
  meta: [
    { name: "description", content: "六角學院募資平臺公開設計稿切版練習。" },
  ],
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>

<style>
/* 使用全域選擇器，讓網站上所有文字的預設字型是思源黑體 */
* {
  font-family: "Noto Sans TC", sans-serif;
}

/* 工具樣式。可以直接套用在需要使用到 Baloo Tamma 2 字型的地方 */
.BalooTamma2 {
  font-family: "Baloo Tamma 2", "Noto Sans TC", sans-serif;
}
</style>
