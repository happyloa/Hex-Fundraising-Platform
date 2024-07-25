<template>
  <div
    class="progressBarTrack progress rounded-3"
    role="progressbar"
    aria-valuenow="41"
    aria-valuemin="0"
    aria-valuemax="100">
    <div
      class="progressBarProgress progress-bar fw-semibold"
      style="width: 41%">
      41%
    </div>
  </div>
</template>

<style scoped>
.progressBarTrack {
  background-color: #eeeeee;
  margin-bottom: 20px;
}

.progressBarProgress {
  background-color: #ffdf65;
  color: #858377;
  font-size: 12px;
}
</style>
