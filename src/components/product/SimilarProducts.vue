<template>
  <div class="similar-products">
    <h2 class="similar-title">Похожие товары</h2>
    <div class="similar-list-scroll">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="similar-product-card"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from '@/components/common/ProductCard.vue';
export default {
  name: 'SimilarProducts',
  components: { ProductCard },
  props: {
    products: { type: Array, required: true }
  }
}
</script>
<style scoped>
.similar-products {
  margin-top: 32px;
}
.similar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 18px;
}
.similar-list-scroll {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding-bottom: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) #eee;
}
.similar-product-card {
  flex: 0 0 auto;
}
.similar-list-scroll::-webkit-scrollbar {
  height: 8px;
}
.similar-list-scroll::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}
</style> 