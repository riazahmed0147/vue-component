<template>
    <div
      tag="article"
      class="product-card"
    >
      <b-row no-gutters>
        <b-col class="brand-image">
          <img class="img-responsive" :src='productDetails.imageURL' :alt='productDetails.name' />
          </b-col>
        <b-col>
            <div class="brand">{{brand}}</div>
            <div class="brand-name">{{productDetails.name}}</div>
            <div class="brand-price-info">
              <span class="default-price">{{productDetails.special_price}}</span>              
              <span v-if="discount" class="original-price">{{productDetails.regular_price}}</span>
              <span v-if="discount" class="discount-percent"><span>-{{offPercent}}%</span></span>
            </div>
            <a v-if="!showDetails" href="#" @click="displayDetails">View Product Details</a>
            <div v-if="showDetails" class="product-details">
                <div><span class="label">Gender</span>: {{productDetails.product_details.gender.value}}</div>
                <div><span class="label">Fragrance</span>: {{productDetails.product_details.fragrance_notes.value}}</div>
            </div>
        </b-col>
      </b-row>      
    </div>
</template>

<style lang="scss" scoped>
  .product-card {
    padding: 1rem;
      
    .brand-price-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        margin-right: 0.2rem;
      }
    }
    .product-details {
      font-size: 0.8rem;
      .label {
        font-weight: bold;
      }
    }
  }
</style>

<script>
export default {
  name: 'ProductDetails',
  props: {
    productDetails: {
      type: Object,
    },
    brand: {
      type: String,
    }
  },
  data() {
    return {
      showDetails: false,
    }
  },
  computed: {
    discount() {
      const discount = Number(this.productDetails.regular_price) - Number(this.productDetails.special_price);
      return discount > 0 ? discount : null;
    },
    savePrice() {
      const discount = this.discount;
      return discount > 0 ? `${this.discount} ${this.productDetails.currency}` : null
    },
    offPercent() {
      const discount = this.discount;
      return discount > 0 ? Math.round(((this.discount) / Number(this.productDetails.regular_price)) * 100) : null
    },
  },
  methods: {
    displayDetails(e) {
      e.preventDefault();
      this.showDetails = true
    }
  },
  updated() {
    this.showDetails = false
  },
}
</script>