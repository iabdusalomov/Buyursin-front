<template>
  <aside class="sidebar">
    <ul class="sidebar__nav">
      <li class="sidebar__item" v-for="item in sidebarMenu" :key="item.alt">
        <a :href="item.link" class="sidebar__link">
          <img :src="item.icon" :alt="item.alt" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export const sidebarMenu = [
  { icon: require('@/assets/icons/house.svg'), alt: 'Home', label: 'Home', link: '#' },
  { icon: require('@/assets/icons/heart.svg'), alt: 'Favorites', label: 'Favorites', link: '#' },
  { icon: require('@/assets/icons/shopping-bag.svg'), alt: 'Cart', label: 'Cart', link: '#' },
];

export default {
  name: 'SideBar',
  data() {
    return { sidebarMenu };
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background-color: var(--white-color);
  /* border-right: 1px solid var(--border-color); */
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.sidebar__link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
}

.sidebar__link:hover {
  background-color: var(--bg-purple);
}

.sidebar__link.active {
    background-color: var(--bg-purple);
}

.sidebar__link img {
  width: 24px;
  height: 24px;
  stroke: #333;
}
</style> 