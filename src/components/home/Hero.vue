<template>
  <section class="hero">
    <div class="container hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          Good clothes.<br />
          Great deals.
        </h1>
        <button class="hero__button">Shop now</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.hero {
  background-image: url('@/assets/banner.png');
  background-size: cover;
  background-position: center;
  padding: 150px 0;
  border-radius: 24px;
  margin-right: 20px;
}

.hero__container {
  display: flex;
  flex-direction: row;
  padding: 0 200px;
}

.hero__content {
  max-width: 50%;
}

.hero__title {
  font-size: 64px;
  font-weight: bold;
  line-height: 1.2;
  color: var(--white-color);
  margin-bottom: 30px;
}

.hero__button {
  background-color: var(--white-color);
  color: var(--text-color);
  padding: 15px 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.hero__button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .hero {
    padding: 60px 0;
    margin-right: 0;
    border-radius: 0;
  }
  .hero__container {
    flex-direction: column;
    padding: 0 20px;
  }
  .hero__content {
    max-width: 100%;
  }
  .hero__title {
    font-size: 32px;
    margin-bottom: 16px;
  }
  .hero__button {
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style> 