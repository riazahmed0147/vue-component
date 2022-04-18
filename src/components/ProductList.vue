<template>
  <b-container>
    <b-row>
      <b-col sm="6" lg="3" v-for='product in products' :key='product.objectID'>
        <ProductCard
          :imageUrl="product.image_url"
          :brand="product.brand_new"
          :name="product.name"
          :specialPrice="product.special_price"
          :currency="product.currency"
          :price="product.price[product.currency]"
          :stock="product.in_stock"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

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