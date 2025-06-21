<template>
  <section class="product-slider-section">
    <div class="container">
      <h2 class="product-slider-title">{{ title }}</h2>
      <div class="product-slider-list-wrapper">
        <div class="product-slider-list">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
          <slot name="adv"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductSlider',
  components: { ProductCard },
  props: {
    title: { type: String, required: true },
    products: { type: Array, required: true },
  },
}
</script>

<style scoped>
.product-slider-section {
  padding: 40px 0 0 0;
}
.product-slider-title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: left;
}
.product-slider-list-wrapper {
  overflow-x: auto;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.product-slider-list {
  display: flex;
  gap: 24px;
  justify-content: center;
}
@media (max-width: 600px) {
  .product-slider-title {
    font-size: 24px;
    margin-bottom: 12px;
    text-align: center;
  }
  .product-slider-list {
    gap: 10px;
    justify-content: flex-start;
  }
  .product-slider-section {
    padding: 20px 0 0 0;
  }
  .product-slider-list-wrapper {
    padding-bottom: 0;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    justify-content: flex-start;
  }
  .product-slider-list-wrapper::-webkit-scrollbar {
    display: none;
  }
}
</style> 