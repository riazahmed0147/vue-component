<template>
  <div class="product-container">
    <div class="product-row">
      <div class="product-col" v-for='product in products' :key='product.objectID'>
        <div class="product-image"><img :alt='product.name' :src='product.image_url'></div>        
        <div>{{product.brand_new}}</div>
        <div>{{product.name}}</div>
        <div>{{product.special_price}} {{product.currency}}</div>
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

  const store = useStore();

  const products = computed(() => {
    return store.state.products.hits;
  })

  onMounted(() => {
    store.dispatch("fetchProducts");
  })
</script>