<template>
  <div class="iconWrapper d-flex flex-wrap mb-3">
    <div class="d-flex align-items-center">
      <img src="/icon/icon_good01.svg" class="icon mr-2 m-md-0" alt="收藏" />
      <span class="iconText d-md-none text-nowrap">認證標章</span>
    </div>
    <div class="d-flex align-items-center">
      <img
        src="/icon/icon_good02.svg"
        class="icon mr-2 m-md-0"
        alt="一定是大拇指" />
      <span class="iconText d-md-none text-nowrap">品質保證</span>
    </div>
    <div class="d-flex align-items-center">
      <img
        src="/icon/icon_good03.svg"
        class="icon mr-2 m-md-0"
        alt="原生創意" />
      <span class="iconText d-md-none text-nowrap">原生創意</span>
    </div>
    <div class="d-flex align-items-center">
      <img src="/icon/icon_good04.svg" class="icon mr-2 m-md-0" alt="人氣王" />
      <span class="iconText d-md-none text-nowrap">人氣王</span>
    </div>
  </div>
</template>

<style scoped>
.iconWrapper {
  row-gap: 16px;
  column-gap: 25px;
}

.icon {
  cursor: pointer;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.1);
}

.iconText {
  color: #636057;
  font-size: 12px;
}
</style>
