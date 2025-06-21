<template>
  <section class="why-buyursin">
    <div class="container">
      <h2 class="section-title">WHY BUYURSIN</h2>
      <div class="features">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon">
            <img :src="feature.icon" :alt="feature.title">
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import leafIcon from '@/assets/icons/leaf.svg';
import cashIcon from '@/assets/icons/cash.svg';
import starIcon from '@/assets/icons/star.svg';

export default {
  name: 'WhyBuyursin',
  data() {
    return {
      features: [
        {
          icon: leafIcon,
          title: 'Sustainable',
          description: 'Giving clothes a second life. Helping the planet.',
        },
        {
          icon: cashIcon,
          title: 'Affordable',
          description: 'Original pieces at prices lower than regular stores.',
        },
        {
          icon: starIcon,
          title: 'Unique',
          description: 'Every find is a stylish piece no one else has.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.why-buyursin {
  padding: 60px 0;
  text-align: center;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
}

.features {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.feature-card {
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 30px;
  max-width: 300px;
}

.feature-icon {
    background-color: var(--bg-purple);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
}

.feature-icon img {
  width: 32px;
  height: 32px;
  stroke: var(--primary-color);
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.feature-description {
  color: #666;
}

@media (max-width: 600px) {
  .why-buyursin {
    padding: 30px 0;
  }
  .features {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .feature-card {
    max-width: 100%;
    padding: 16px;
  }
  .section-title {
    font-size: 22px;
    margin-bottom: 20px;
  }
}
</style> 