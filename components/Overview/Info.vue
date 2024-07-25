<template>
  <h2 class="goal">目標 <span class="BalooTamma2">$600,000</span></h2>
  <p class="m-0">
    <span class="amountRaised BalooTamma2 fs-2 fw-bolder">$280,047</span>
  </p>
  <ProductProgressBar />
  <div class="row mb-2">
    <div class="col-6">
      <h3 class="statusHeading m-0">贊助人數</h3>
      <span class="statusNumber BalooTamma2 fw-bold fs-2">1374 </span>
      <span class="statusUnit fw-bold fs-4">人</span>
    </div>
    <div class="col-6">
      <h3 class="statusHeading m-0">募資倒數</h3>
      <span class="statusNumber BalooTamma2 fw-bold fs-2">27 </span>
      <span class="statusUnit fw-bold fs-4">天</span>
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
}

.amountRaised {
  color: #494846;
}

.statusHeading {
  color: #636057;
  font-size: 14px;
}

.statusNumber {
  color: #494846;
}

.statusUnit {
  color: #1f1e00;
  line-height: 56px;
}
</style>
