<template>
  <div class="home-page">
    <HeroSection />
    <WhyBuyursin />
    <CategoriesSection />

    <ProductSlider :title="'New'" :products="productsNew" />
    <AdvBlock />
    <ProductSlider :title="'Popular'" :products="productsPopular" />
    <AdvBlock />
    <ProductSlider :title="'Summer style'" :products="productsSummer" />

    <FooterSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/Hero.vue';
import WhyBuyursin from '@/components/home/WhyBuyursin.vue';
import CategoriesSection from '@/components/home/Categories.vue';
import ProductSlider from '@/components/common/ProductSlider.vue';
import AdvBlock from '@/components/common/Advertisement.vue';
import FooterSection from '@/components/layout/Footer.vue';

const productStub = {
  id: 1,
  title: 'Product',
  img: 'https://via.placeholder.com/100x120?text=Product',
  price: '99 999',
  features: [
    'Cotton with soft patterns, classic fit',
    'Size: L',
    'Color: Black',
  ],
};

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    WhyBuyursin,
    CategoriesSection,
    ProductSlider,
    AdvBlock,
    FooterSection,
  },
  data() {
    return {
      productsNew: [
        { ...productStub, id: 1 },
        { ...productStub, id: 2 },
        { ...productStub, id: 3 },
        { ...productStub, id: 4 },
      ],
      productsPopular: [
        { ...productStub, id: 5, price: '66 666' },
        { ...productStub, id: 6, price: '77 777' },
        { ...productStub, id: 7, price: '55 555' },
        { ...productStub, id: 8, price: '99 999' },
      ],
      productsSummer: [
        { ...productStub, id: 9 },
        { ...productStub, id: 10 },
        { ...productStub, id: 11 },
        { ...productStub, id: 12 },
      ],
    };
  },
};
</script>

<style scoped>
.home-page {
  padding: 0;
}
</style> 