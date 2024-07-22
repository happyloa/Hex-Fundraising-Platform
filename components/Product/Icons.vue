<template>
  <div class="d-flex gap-4 mb-3">
    <UTooltip text="收藏" :popper="{ placement: 'top', gpuAcceleration: true }">
      <div class="d-flex align-items-center">
        <img src="/icon/icon_good01.svg" class="icon mr-2 m-md-0" alt="收藏" />
        <span class="iconText d-md-none text-nowrap">認證標章</span>
      </div>
    </UTooltip>
    <UTooltip
      text="一定是大拇指"
      :popper="{ placement: 'top', gpuAcceleration: true }">
      <div class="d-flex align-items-center">
        <img
          src="/icon/icon_good02.svg"
          class="icon mr-2 m-md-0"
          alt="一定是大拇指" />
        <span class="iconText d-md-none text-nowrap">品質保證</span>
      </div>
    </UTooltip>
    <UTooltip
      text="品質保證"
      :popper="{ placement: 'top', gpuAcceleration: true }">
      <div class="d-flex align-items-center">
        <img
          src="/icon/icon_good03.svg"
          class="icon mr-2 m-md-0"
          alt="品質保證" />
        <span class="iconText d-md-none text-nowrap">原生創意</span>
      </div>
    </UTooltip>
    <UTooltip
      text="品質保證"
      :popper="{ placement: 'top', gpuAcceleration: true }">
      <div class="d-flex align-items-center">
        <img
          src="/icon/icon_good04.svg"
          class="icon mr-2 m-md-0"
          alt="品質保證" />
        <span class="iconText d-md-none text-nowrap">人氣王</span>
      </div>
    </UTooltip>
  </div>
</template>

<style scoped>
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
