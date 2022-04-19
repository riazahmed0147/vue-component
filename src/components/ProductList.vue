<template>
  <b-container>
    <b-row>
      <b-col sm="6" lg="3" v-for='(product, index) in products' :key='index'>
        <ProductCard
          :imageUrl="product.image_url"
          :brand="product.brand_new"
          :name="product.name"
          :specialPrice="product.special_price"
          :currency="product.currency"
          :price="product.price[product.currency]"
          :stock="product.in_stock"
          :click="handleClick"
          :index="index"
        />
      </b-col>
    </b-row>
  </b-container>
  <AddToCartModal :product="selectedProduct" />
  <NotifyMeModal :name="selectedProduct.name" />
</template>

<style lang="scss">
  .btn-block {
    width: 100%;
  }
</style>

<script>
  import ProductCard from './ProductCard.vue';
  import AddToCartModal from './AddToCartModal.vue';
  import NotifyMeModal from './NotifyMeModal.vue';

  import store from '../store'

  export default {
    name: 'ProductList',
    props: {},
    components: {
      ProductCard,
      AddToCartModal,
      NotifyMeModal
    },
    data() {
      return {
        products: [],
        selectedProduct: {
          price: {
            'SAR': {
              default_original: 0,
              default: 0,
              default_original_formated: '',
              default_formated: '',
            }
          },
          currency: 'SAR',
          in_stock: 0,
          image_url: '',
          name: '',
          brand_new: '',
          size_new: [],
          gender: '',
          fragrance_notes: '',
        },
      }
    },
    methods: {
      async getData() {
        await store.dispatch("fetchProducts");
        this.products = store.state.products.hits;
      },
      handleClick(i) {
        this.selectedProduct = this.products[i];
      }
    },
    created() {
      this.getData();
    }
    
  }
</script>