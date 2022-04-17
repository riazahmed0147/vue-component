<template>
  <div class="product-container">
    <div class="product-row">
      <div class="product-col" v-for='product in products' :key='product.objectID'>
        <ProductCard
          v-bind:imageUrl="product.image_url"
          v-bind:brand="product.brand_new"
          v-bind:name="product.name"
          v-bind:specialPrice="product.special_price"
          v-bind:currency="product.currency"
          v-bind:price="product.price[product.currency]"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .product-container {
    width: 1000px;
    margin: 20px auto;
    padding: 0 15px;

    .product-row {
      margin-left: -15px;
      margin-right: -15px;
      display: flex;
      flex-wrap: wrap;

      .product-col {
        width: 25%;
        padding: 0 15px;
        margin-bottom: 15px;

        .product-image {
          img {
            width: 100%;
          }
        }
      }
    }
 }
</style>

<script setup>
  import { onMounted, computed } from 'vue';
  import { useStore } from 'vuex'
  import ProductCard from './ProductCard.vue';

  const store = useStore();

  const products = computed(() => {
    return store.state.products.hits;
  })

  onMounted(() => {
    store.dispatch("fetchProducts");
  })
</script>