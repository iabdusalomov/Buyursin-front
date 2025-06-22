<template>
  <div class="product-reviews">
    <h2 class="reviews-title">Отзывы</h2>
    <div v-if="reviews.length === 0" class="no-reviews">Пока нет отзывов</div>
    <div v-else class="reviews-list">
      <div v-for="(review, i) in reviews" :key="i" class="review">
        <div class="review-header">
          <span class="review-name">{{ review.name }}</span>
          <span class="review-date">{{ review.date }}</span>
        </div>
        <div class="review-text">{{ review.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductReviews',
  props: {
    reviews: { type: Array, required: true }
  }
}
</script>
<style scoped>
.product-reviews {
  margin-top: 24px;
  background: #f8f9fa;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(123,44,191,0.04);
}
.reviews-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 18px;
}
.no-reviews {
  color: #aaa;
  font-size: 1rem;
  text-align: center;
}
.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.review {
  background: #fff;
  border-radius: 12px;
  padding: 16px 18px;
  box-shadow: 0 1px 4px rgba(123,44,191,0.03);
}
.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}
.review-name {
  font-weight: 600;
  color: var(--primary-color);
}
.review-date {
  color: #bbb;
  font-size: 0.95em;
}
.review-text {
  color: var(--text-color);
  font-size: 1.05rem;
}
</style> 