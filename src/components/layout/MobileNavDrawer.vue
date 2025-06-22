<template>
  <div class="mobile-nav-drawer__overlay" @click.self="$emit('close')">
    <nav class="mobile-nav-drawer">
      <button class="mobile-nav-drawer__close" @click="$emit('close')">×</button>
      <ul class="mobile-nav-drawer__list">
        <li v-for="item in menu" :key="item.alt" class="mobile-nav-drawer__item">
          <a :href="item.link" class="mobile-nav-drawer__link">
            <img :src="item.icon" :alt="item.alt" class="mobile-nav-drawer__icon" />
            <span>{{ item.label }}</span>
          </a>
        </li>
        <router-link to="/login" class="mobile-nav-drawer__login-btn">
        Войти
      </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { sidebarMenu } from './SideBar.vue';
export default {
  name: 'MobileNavDrawer',
  data() {
    return {
      menu: sidebarMenu,
    };
  },
};
</script>

<style scoped>
.mobile-nav-drawer__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.35);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
}
.mobile-nav-drawer {
  background: #fff;
  width: 80vw;
  max-width: 320px;
  height: 100%;
  box-shadow: -2px 0 16px rgba(0,0,0,0.08);
  padding: 32px 20px 20px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.2s;
}
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.mobile-nav-drawer__close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 32px;
  color: var(--primary-color);
  cursor: pointer;
  z-index: 1;
}
.mobile-nav-drawer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.mobile-nav-drawer__link {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 18px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}
.mobile-nav-drawer__icon {
  width: 28px;
  height: 28px;
}

.mobile-nav-drawer__login-btn {
  margin-top: auto;
  padding: 12px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
}
</style> 