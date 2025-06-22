<template>
  <div class="product-info">
    <h1 class="product-title">{{ product.title }}</h1>
    <div class="product-price">{{ product.price }}</div>
    <!-- <div class="product-category">Категория: <span>{{ product.category }}</span></div> -->
    <div class="product-description">{{ product.description }}</div>
  </div>
</template>
<script>
export default {
  name: 'ProductInfo',
  props: {
    product: { type: Object, required: true }
  }
}
</script>
<style scoped>
.product-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.product-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
}
.product-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--secondary-color);
}
.product-category {
  font-size: 1rem;
  color: #888;
}
.product-category span {
  color: var(--primary-color);
  font-weight: 500;
}
.product-description {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-top: 8px;
}
.more-info-link {
  color: var(--primary-color);
  font-size: 1rem;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
  transition: color 0.2s;
  display: inline-block;
}
.more-info-link:hover {
  color: var(--secondary-color);
}
</style> 