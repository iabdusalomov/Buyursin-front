<template>
  <div id="app-container">
    <SideBar />
    <div class="content-wrapper">
      <AppHeader @open-mobile-menu="openMobileMenu" />
      <main>
        <HomePage />
      </main>
    </div>
    <MobileNavDrawer v-if="isMobileMenuOpen" @close="closeMobileMenu" />
  </div>
</template>

<script>
import AppHeader from './components/layout/Header.vue'
import SideBar from './components/layout/SideBar.vue'
import HomePage from './views/HomePage.vue'
import MobileNavDrawer from './components/layout/MobileNavDrawer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideBar,
    HomePage,
    MobileNavDrawer,
  },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    openMobileMenu() {
      this.isMobileMenuOpen = true;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
}
</script>

<style>
/* Resetting some default styles from vue */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */

.content-wrapper {
  margin-left: 80px; /* Same as sidebar width */
}

@media (max-width: 600px) {
  .content-wrapper {
    margin-left: 0;
  }
  .sidebar {
    display: none !important;
  }
}
</style>
