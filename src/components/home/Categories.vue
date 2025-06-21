<template>
  <section class="categories-section">
    <div class="container">
      <h2 class="categories-title">Categories</h2>
      <div class="categories-list-wrapper">
        <div class="categories-list">
          <div class="category-card" v-for="category in categories" :key="category.title">
            <img :src="category.img" :alt="category.title" class="category-img" />
          </div>
          <button class="categories-next-btn">
            <img src="@/assets/icons/next.svg" alt="Next" class="categories-next-icon" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoriesSection',
  data() {
    return {
      categories: [
        { title: 'Sweaters', img: require('@/assets/cat-1.jpg') },
        { title: 'Pants', img: require('@/assets/cat-2.jpg') },
        { title: 'Jackets', img: require('@/assets/cat-3.jpg') },
        { title: 'Dresses', img: require('@/assets/cat-4.jpg') },
      ],
    }
  },
}
</script>

<style scoped>
.categories-section {
  padding: 40px 0 0 0;
}

.categories-title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: left;
}

.categories-list-wrapper {
  overflow-x: auto;
  padding-bottom: 10px;
}

.categories-list {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
}

.category-card {
  min-width: 200px;
  max-width: 200px;
  height: 300px;
  background: var(--white-color);
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  overflow: hidden;
  padding: 10px;
}

.category-card:hover {
  box-shadow: 0 4px 16px rgba(123, 44, 191, 0.08);
}

.category-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.categories-next-btn {
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  transition: none;
  box-shadow: none;
  outline: none;
  padding: 0;
}

.categories-next-btn:hover {
  background: none;
  border: none;
  box-shadow: none;
}

.categories-next-icon {
  width: 24px;
  height: 24px;
  display: block;
}

@media (max-width: 600px) {
  .categories-title {
    font-size: 28px;
    margin-bottom: 12px;
    text-align: center;
  }
  .categories-list {
    gap: 10px;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    overflow-x: visible;
  }
  .categories-list-wrapper {
    overflow-x: visible;
    padding-bottom: 0;
  }
  .category-card {
    min-width: 120px;
    max-width: 120px;
    height: 160px;
    padding: 4px;
    border-radius: 10px;
  }
  .categories-next-btn {
    display: none;
  }
  .categories-next-icon {
    width: 18px;
    height: 18px;
  }
}
</style> 