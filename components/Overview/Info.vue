<template>
  <h2 class="goal m-0">目標 <span class="BalooTamma2">$600,000</span></h2>
  <span class="amountRaised BalooTamma2 fs-2 fw-bolder">$280,047</span>
  <OverviewProgressBar />
  <div class="row mb-2">
    <div class="col-6">
      <h3 class="statusHeading m-0">贊助人數</h3>
      <span class="statusNumber BalooTamma2 fw-bold"
        >1374 <span class="statusUnit">人</span></span
      >
    </div>
    <div class="col-6">
      <h3 class="statusHeading m-0">募資倒數</h3>
      <span class="statusNumber BalooTamma2 fw-bold"
        >27 <span class="statusUnit">天</span></span
      >
    </div>
  </div>
  <OverviewIcons />
  <OverviewAnnouncement />
  <OverviewBtnGroup />
</template>

<style scoped>
.goal {
  color: #636057;
  font-size: 14px;
  line-height: 20px;
}

.amountRaised {
  color: #494846;
  line-height: 56px;
}

.statusHeading {
  color: #636057;
  font-size: 14px;
}

.statusNumber {
  color: #494846;
  font-size: 32px;
  line-height: 56px;
}

.statusUnit {
  font-size: 24px;
}

@media (max-width: 576px) {
  .amountRaised {
    font-size: 32px !important;
  }
}
</style>
