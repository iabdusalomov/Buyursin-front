<template>
  <nav class="breadcrumbs">
    <button class="back-btn" @click="$router.back()">← Назад</button>
    <!-- <span class="breadcrumbs-sep">/</span>
    <span class="breadcrumbs-category">{{ product.category }}</span>
    <span class="breadcrumbs-sep">/</span>
    <span class="breadcrumbs-title">{{ product.title }}</span> -->
  </nav>
</template>
<script>
export default {
  name: 'ProductBreadcrumbs',
  props: {
    product: { type: Object, required: true }
  }
}
</script>
<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: var(--primary-color);
  margin-bottom: 8px;
}
.back-btn {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 15px;
  cursor: pointer;
  padding: 0 8px 0 0;
  font-weight: 500;
  transition: color 0.2s;
}
.back-btn:hover {
  color: var(--secondary-color);
}
.breadcrumbs-sep {
  color: #bbb;
}
.breadcrumbs-category {
  color: var(--secondary-color);
  font-weight: 500;
}
.breadcrumbs-title {
  color: var(--primary-color);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
</style> 