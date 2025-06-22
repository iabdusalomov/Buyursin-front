<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo">
        <img src="@/assets/logo.svg" alt="Buyursin logo" class="header__logo-img" />
      </div>
      <nav class="header__nav">
        <div class="header__search">
          <img src="@/assets/icons/search.svg" alt="Search" class="header__search-icon" />
          <input type="text" placeholder="Search on Buyursin" />
        </div>
      </nav>
      <div class="header__user">
        <img src="@/assets/icons/user.svg" alt="User" />
      </div>
      <router-link to="/login" class="header__login-btn">Войти</router-link>
      <button class="header__burger" @click="$emit('open-mobile-menu')">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader', // Renamed to avoid conflict with HTML header tag
}
</script>

<style scoped>
.header {
  padding: 20px 0;
  /* border-bottom: 1px solid var(--border-color); */
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.header__logo {
  font-weight: bold;
  font-size: 24px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__search {
  position: relative;
}

.header__search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  stroke: #999;
}

.header__search input {
  padding: 10px 10px 10px 40px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  width: 420px;
}

.header__user {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.header__user img {
  width: 24px;
  height: 24px;
  stroke: #333;
}

.header__logo-img {
  height: 36px;
  width: auto;
  display: block;
}

.header__login-btn {
  background: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}

.header__login-btn:hover {
  background: var(--secondary-color);
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  padding: 0;
  margin-left: 10px;
  cursor: pointer;
  z-index: 1002;
}

.header__burger span {
  display: block;
  width: 26px;
  height: 3px;
  background: var(--primary-color);
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}

@media (max-width: 600px) {
  .header__container {
    /* flex-direction: column; */
    /* align-items: flex-start; */
    gap: 10px;
  }
  .header__search input {
    width: 100%;
    min-width: 0;
    max-width: 100vw;
    font-size: 15px;
  }
  .header__logo-img {
    height: 28px;
  }
  .header {
    padding: 10px 0;
  }
  .header__user {
    width: 36px;
    height: 36px;
  }
  .header__burger {
    display: flex;
  }
  .header__nav, .header__user, .header__login-btn {
    display: none;
  }
}
</style> 