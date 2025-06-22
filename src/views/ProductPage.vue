<template>
  <div class="product-page">
    <ProductBreadcrumbs :product="product" />
    <div class="product-main">
      <ProductGallery :images="product.images" />
      <div class="product-main-info">
        <ProductInfo :product="product" />
        <ProductLikes :likes="product.likes" />
        <ProductSeller :seller="product.seller" />
        <ProductShowPhone :phone="product.seller.phone" />
      </div>
    </div>
    <ProductReviews :reviews="product.reviews" />
    <SimilarProducts :products="similarProducts" />
  </div>
</template>

<script>
import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs.vue';
import ProductGallery from '@/components/product/ProductGallery.vue';
import ProductInfo from '@/components/product/ProductInfo.vue';
import ProductLikes from '@/components/product/ProductLikes.vue';
import ProductSeller from '@/components/product/ProductSeller.vue';
import ProductShowPhone from '@/components/product/ProductShowPhone.vue';
import ProductReviews from '@/components/product/ProductReviews.vue';
import SimilarProducts from '@/components/product/SimilarProducts.vue';

export default {
  name: 'ProductPage',
  components: {
    ProductBreadcrumbs,
    ProductGallery,
    ProductInfo,
    ProductLikes,
    ProductSeller,
    ProductShowPhone,
    ProductReviews,
    SimilarProducts
  },
  data() {
    return {
      product: {
        id: 1,
        title: 'Смартфон Samsung Galaxy S21',
        price: '5 990 000 сум',
        images: [
          require('@/assets/product-image.jpeg'),
          require('@/assets/cat-1.jpg'),
          require('@/assets/cat-2.jpg'),
        ],
        description: 'Современный смартфон с отличной камерой и мощным процессором.',
        // category: 'Смартфоны',
        likes: 128,
        seller: {
          name: 'Иван Иванов',
          avatar: require('@/assets/cat-3.jpg'),
          phone: '+998901234567',
        },
        reviews: [
          { name: 'Алексей', date: '2024-06-01 12:30', text: 'Отличный телефон, пользуюсь месяц.' },
          { name: 'Мария', date: '2024-06-02 09:15', text: 'Камера супер, батарея держит долго.' },
        ],
      },
      similarProducts: Array.from({ length: 20 }, (_, i) => ({
        id: i + 2,
        title: `Похожий товар ${i + 1}`,
        price: `${(i + 2) * 1000000} сум`,
        image: require('@/assets/cat-4.jpg'),
        features: [
            'Cotton with soft patterns, classic fit',
            'Size: L',
            'Color: Black',
        ],
      })),
    };
  },
};
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 12px 48px 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.product-main {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.product-main-info {
  flex: 1 1 320px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (max-width: 900px) {
  .product-main {
    flex-direction: column;
    gap: 20px;
  }
}
</style> 