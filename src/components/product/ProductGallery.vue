<template>
  <div class="gallery">
    <div class="gallery-main">
      <img :src="images[activeIndex]" class="gallery-main-img" alt="Фото товара" />
    </div>
    <div class="gallery-thumbs" v-if="images.length > 1">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        :class="['gallery-thumb', { active: i === activeIndex }]"
        @click="activeIndex = i"
        alt="Миниатюра"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductGallery',
  props: {
    images: { type: Array, required: true }
  },
  data() {
    return { activeIndex: 0 };
  }
}
</script>
<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 280px;
  max-width: 400px;
  width: 100%;
}
.gallery-main {
  width: 100%;
  aspect-ratio: 1/1;
  background: #f8f9fa;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.gallery-main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 18px;
}
.gallery-thumbs {
  display: flex;
  gap: 10px;
  width: 100%;
  overflow-x: auto;
}
.gallery-thumb {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.2s;
}
.gallery-thumb.active {
  border: 2px solid var(--primary-color);
}
</style> 