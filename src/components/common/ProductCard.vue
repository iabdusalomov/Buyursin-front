<template>
  <div class="product-card">
    <div class="product-card__img-wrapper">
      <img :src="require('@/assets/product-image.jpeg')" :alt="product.title" class="product-card__img" />
      <button class="product-card__fav-btn">❤</button>
    </div>
    <div class="product-card__info">
      <div class="product-card__price">{{ product.price }} sum</div>
      <ul class="product-card__features">
        <li v-for="(feature, idx) in product.features" :key="idx">{{ feature }}</li>
      </ul>
      <router-link :to="'/product/1'" class="product-card__more-link">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.product-card {
  background: var(--white-color);
  /* border: 1px solid var(--border-color); */
  border-radius: 16px;
  width: 220px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.product-card__img-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card__fav-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--bg-purple);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: none;
  color: var(--primary-color);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-card__info {
  padding: 12px 12px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.product-card__price {
  font-weight: bold;
  color: var(--primary-color);
  font-size: 24px;
}
.product-card__features {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}
.product-card__more-link {
  /* background: var(--secondary-color);
  color: #fff; */
  /* border-radius: 24px;
  padding: 10px 15px; */
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  /* transition: background 0.2s; */
  text-decoration: none;
  /* margin-top: 4px; */
  cursor: pointer;
  /* transition: color 0.2s; */
  /* display: inline-block; */
}
/* .product-card__more-link:hover {
  color: var(--secondary-color);
} */
@media (max-width: 600px) {
  .product-card {
    width: calc(50vw - 15px);
    min-width: calc(47.5vw - 15px);
    max-width: calc(47.5vw - 15px);
    border-radius: 10px;
  }
  .product-card__img-wrapper {
    height: 110px;
  }
  .product-card__price {
    font-size: 16px;
  }
  .product-card__more-btn {
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 14px;
  }
  .product-card__info {
    padding: 8px 6px 10px 6px;
    gap: 4px;
  }
}
</style> 