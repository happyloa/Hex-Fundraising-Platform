<template>
  <div class="row g-2">
    <div class="col-12">
      <button class="supportBtn btn w-100 fw-bold rounded-pill" type="button">
        贊助專案
      </button>
    </div>
    <div class="col-6 col-md-7">
      <button class="actionBtn btn w-100 fw-bold rounded-pill" type="button">
        <font-awesome icon="heart" class="icon mr-2" />
        追蹤專案
      </button>
    </div>
    <div class="col-6 col-md-5">
      <button class="actionBtn btn w-100 fw-bold rounded-pill" type="button">
        <font-awesome icon="share-nodes" class="icon mr-2" />
        分享
      </button>
    </div>
  </div>
</template>

<style scoped>
.supportBtn {
  background-color: #ffdf65;
  color: #636057;
  font-size: 20px;
  padding: 12px 0px;
  transition: all 0.3s ease-in-out;
}

.supportBtn:hover {
  background-color: #ff785e;
  box-shadow: 0 0 10px 0 rgba(73, 72, 70, 0.15);
  color: #ffffff;
}

.actionBtn {
  border: 2px solid #858377;
  color: #858377;
  font-size: 20px;
  padding: 12px 0px;
  transition: all 0.3s ease-in-out;
}

.actionBtn:hover {
  background-color: #ffdf65;
  border: 2px solid transparent;
}

.actionBtn .icon {
  transition: all 0.3s ease-in-out;
}

.actionBtn:hover .icon {
  color: #ff785e;
}

@media (max-width: 576px) {
  .supportBtn,
  .actionBtn {
    padding: 8px 0px;
    font-size: 18px;
    letter-spacing: 0.8px;
  }
}
</style>
