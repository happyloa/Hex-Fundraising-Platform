<template>
  <div class="d-flex gap-4 mb-3">
    <UTooltip text="收藏" :popper="{ placement: 'top', gpuAcceleration: true }">
      <img src="/icon/icon_good01.svg" class="icon" alt="收藏" />
    </UTooltip>
    <UTooltip
      text="一定是大拇指"
      :popper="{ placement: 'top', gpuAcceleration: true }">
      <img src="/icon/icon_good02.svg" class="icon" alt="一定是大拇指" />
    </UTooltip>
    <UTooltip
      text="品質保證"
      :popper="{ placement: 'top', gpuAcceleration: true }">
      <img src="/icon/icon_good03.svg" class="icon" alt="品質保證" />
    </UTooltip>
    <UTooltip
      text="品質保證"
      :popper="{ placement: 'top', gpuAcceleration: true }">
      <img src="/icon/icon_good04.svg" class="icon" alt="品質保證" />
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
</style>
