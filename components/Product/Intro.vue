<template>
  <section class="wrapper">
    <div class="container">
      <span class="productCategory text-white fw-bold rounded-1 mb-1"
        >魔法科技</span
      >
      <h1 class="heading fs-2 fw-bold mb-4">
        拍出會動的照片｜LivePhotos 魔法拍立得
      </h1>
      <div class="row">
        <div class="col-md-6">
          <img
            src="/image/produt_image.webp"
            class="img-fluid"
            alt="募資商品圖片" />
        </div>
        <div class="col-md-6">
          <ProductInfo />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  background-color: #f8f9fa;
  padding: 48px 0 64px;
}

.productCategory {
  background: #858377;
  padding: 1px 16px 3px;
}

.heading {
  color: #494846;
  letter-spacing: 3px;
}
</style>
