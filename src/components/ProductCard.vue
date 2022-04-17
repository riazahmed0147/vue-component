<template>
  <div class="product-image"><img :alt='name' :src='imageUrl'></div>        
  <div>{{brand}}</div>
  <div>{{name}}</div>
  <div>{{price.default_formated}}</div>
  <div>{{savePrice}}</div>
  <div>{{price.default_original_formated}}</div>
  <div>{{offPercent}}</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    imageUrl: {
      type: String
    },
    brand: {
      type: String
    },
    name: {
      type: String
    },
    specialPrice: {
      type: Number
    },
    currency: {
      type: String
    },
    price: {
      type: Object,
    }
  },
  computed: {
    discount() {
      return this.price.default_original - this.price.default;
    },
    savePrice() {
      return `Save ${this.discount} ${this.currency}`
    },
    offPercent() {
      return `${Math.round(((this.discount) / this.price.default_original) * 100)} %`
    }    
  }
}
</script>