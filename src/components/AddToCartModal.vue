<template>    
  <div>
    <b-modal hide-footer id="modal-1" :title="title">
      <ProductDetails :productDetails="selectedProductDetail" :brand="product.brand_new" />
      <div class="sizes">
        <div><strong>Sizes</strong></div>
        <b-button variant="outline-secondary" v-for="(size, index) in product.size_new" @click="selectProduct(index)" :key="index">
          {{size}}
        </b-button>
      </div>
      <b-button  class="btn-block" href="#">Add To Cart</b-button>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>  
  .sizes {
    margin-top: 1rem;
    margin-bottom: 1rem;

    button {
      margin-right: 1rem;
    }
  }
</style>

<script>
import ProductDetails from './ProductDetails.vue';
export default {
  name: 'AddToCartModal',
  props: {
    product: {
      type: Object,
    }
  },
  components: {
    ProductDetails,
  },
  data() {
    return {
      title: "Add item to cart",
      selectedProductDetail: {}
    }
  },
  methods: {
    selectProduct(i) {
      this.selectedProductDetail = this.product.associated_products[i]
    }
  },
  updated() {
    this.selectedProductDetail = this.product.associated_products[0]
  }
}
</script>
