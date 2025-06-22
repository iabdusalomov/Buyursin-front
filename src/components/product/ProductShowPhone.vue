<template>
  <div class="show-phone">
    <button v-if="!show" class="show-phone-btn" @click="show = true">Показать номер телефона</button>
    <a v-else :href="`tel:${phone}`" class="phone-number">{{ phone }}</a>
  </div>
</template>
<script>
export default {
  name: 'ProductShowPhone',
  props: {
    phone: { type: String, required: true }
  },
  data() {
    return { show: false };
  }
}
</script>
<style scoped>
.show-phone {
  margin: 12px 0 0 0;
}
.show-phone-btn {
  width: 100%;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(123,44,191,0.08);
}
.show-phone-btn:hover {
  background: var(--secondary-color);
}
.phone-number {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  background: #f8f9fa;
  border-radius: 14px;
  padding: 14px 0;
  text-decoration: none;
  letter-spacing: 1px;
  transition: background 0.2s;
}
.phone-number:hover {
  background: #e9ecef;
}
</style> 