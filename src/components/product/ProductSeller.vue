<template>
  <div class="product-seller">
    <img :src="seller.avatar" alt="Аватар продавца" class="seller-avatar" />
    <span class="seller-name">{{ seller.name }}</span>
  </div>
</template>
<script>
export default {
  name: 'ProductSeller',
  props: {
    seller: { type: Object, required: true }
  }
}
</script>
<style scoped>
.product-seller {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
}
.seller-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary-color);
  background: #f8f9fa;
}
.seller-name {
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 500;
}
</style> 