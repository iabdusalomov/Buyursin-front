<template>
  <div class="product-likes">
    <button class="like-btn" :class="{ liked }" @click="toggleLike">
      <svg v-if="liked" viewBox="0 0 24 24" width="24" height="24" fill="#e74c3c"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <svg v-else viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </button>
    <span class="likes-count">{{ likesCount }}</span>
  </div>
</template>
<script>
export default {
  name: 'ProductLikes',
  props: {
    likes: { type: Number, required: true }
  },
  data() {
    return {
      liked: false,
      likesCount: this.likes
    }
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
      this.likesCount += this.liked ? 1 : -1;
    }
  }
}
</script>
<style scoped>
.product-likes {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
}
.like-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: transform 0.1s;
}
.like-btn:active {
  transform: scale(1.1);
}
.like-btn svg {
  display: block;
}
.like-btn.liked svg {
  filter: drop-shadow(0 2px 8px #e74c3c33);
}
.likes-count {
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 500;
}
</style> 