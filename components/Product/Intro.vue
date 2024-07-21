<template>
  <section class="wrapper">
    <div class="container">
      <span
        class="productCategory d-inline-block text-white fw-bold rounded-1 mb-2 mb-sm-1"
        >魔法科技</span
      >
      <h1 class="productName fs-2 fw-bold mb-3 mb-sm-4">
        拍出會動的照片｜<br class="d-sm-none" />LivePhotos 魔法拍立得
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
  background-color: #858377;
  font-size: 12px;
  padding: 1px 16px 3px;
}

.productName {
  color: #494846;
  letter-spacing: 3px;
}

@media (max-width: 576px) {
  .wrapper {
    padding: 16px 0 32px;
  }

  .productName {
    color: #53524f;
    letter-spacing: 2.25px;
  }
}
</style>
