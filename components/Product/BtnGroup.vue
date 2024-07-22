<template>
  <button
    class="supportBtn btn w-100 fs-5 fw-bold rounded-pill mb-2"
    type="button">
    贊助專案
  </button>
  <div class="row">
    <div class="col-md-7">
      <button
        class="actionBtn btn w-100 fs-5 fw-bold rounded-pill"
        type="button">
        <font-awesome icon="heart" class="icon mr-2" />
        追蹤專案
      </button>
    </div>
    <div class="col-md-5">
      <button
        class="actionBtn btn w-100 fs-5 fw-bold rounded-pill"
        type="button">
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
</style>
