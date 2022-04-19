<template>    
  <div>
    <b-modal hide-footer id="modal-1" :title="title">
      <div
        tag="article"
        class="product-card"
      >
        <b-row no-gutters>
          <b-col class="brand-image">
            <img class="img-responsive" :src='product.image_url' :alt='product.name' />
            </b-col>
          <b-col>
              <div class="brand">{{product.brand_new}}</div>
              <div class="brand-name">{{product.name}}</div>
              <div class="brand-price-info">
                <span class="default-price">{{product.price[product.currency].default_formated}}</span>              
                <span v-if="discount" class="original-price">{{product.price[product.currency].default_original_formated}}</span>
                <span v-if="discount" class="discount-percent"><span>-{{offPercent}}%</span></span>
              </div>
              <a v-if="!productDetails" href="#" @click="showDetails">View Product Details</a>
              <div v-if="productDetails" class="product-details">
                  <div><span class="label">Gender</span>: {{product.gender}}</div>
                  <div><span class="label">Fragrance</span>: {{product.fragrance_notes}}</div>
              </div>
          </b-col>
        </b-row>
        <div class="sizes">
          <div><strong>Sizes</strong></div>
          <b-button v-for="(size, index) in product.size_new" :key="index">
           {{size}}
          </b-button>
        </div>
      </div>
      <b-button class="btn-block" href="#">Add To Cart</b-button>
    </b-modal>
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
    .sizes {
      button {
        margin-top: 1rem;
        margin-right: 1rem;
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
  name: 'AddToCartModal',
  props: {
    product: {
      type: Object,
    }
  },
  data() {
    return {
      title: "Add item to cart",
      productDetails: false,
    }
  },
  computed: {
    discount() {
      const discount = this.product.price[this.product.currency].default_original - this.product.price[this.product.currency].default;
      return discount > 0 ? discount : null;
    },
    savePrice() {
      const discount = this.discount;
      return discount > 0 ? `${this.discount} ${this.product.currency}` : null
    },
    offPercent() {
      const discount = this.discount;
      return discount > 0 ? Math.round(((this.discount) / this.product.price[this.product.currency].default_original) * 100) : null
    },
    inStock() {
      return this.product.in_stock > 0 ? true : false
    },
  },
  methods: {
    showDetails() {
      this.productDetails = true
    }
  },
  updated() {
    this.productDetails = false
  }
}
</script>
