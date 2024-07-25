<template>
  <div class="announcementContainer rounded-3 mb-3 mb-sm-4" role="alert">
    <p class="announcementMsg m-0">
      專案募資中！<br />
      在
      <time class="announcementTime lh-base fw-bold">2021/06/14 23:59</time>
      募資結束前，您都可以贊助此計畫。
    </p>
  </div>
</template>

<style scoped>
.announcementContainer {
  background-color: #ffffff;
  border-left: 3px solid #ffdf65;
  padding: 14px 20px 14px 16px;
}

.announcementMsg {
  color: #636057;
  line-height: 20px;
}

.announcementTime {
  color: #000027;
}

@media (max-width: 576px) {
  .announcementMsg {
    font-size: 14px;
    text-align: justify;
  }
}
</style>
