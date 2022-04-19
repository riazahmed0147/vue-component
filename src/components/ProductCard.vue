<template>
  <b-card
    tag="article"
    class="product-card"
  >
    <div class="add-favorite">
      <i 
        role="button" 
        tabindex="0" 
        :class="{ 'bi bi-heart-fill': isMarkedFavorite, 'bi bi-heart': !isMarkedFavorite }" 
        @click='handleClick'
      />
    </div>
    <div class="brand-image"><img class="img-responsive" :src='imageUrl' :alt='name' /></div>
    <div class="brand">{{brand}}</div>
    <div class="brand-name">{{name}}</div>
    <b-row no-gutters>
      <b-col class="default-price">{{price.default_formated}}</b-col>
      <b-col v-if="discount" class="discount-percent"><span>-{{offPercent}}%</span></b-col>
    </b-row>
    <b-row no-gutters>
      <b-col v-if="discount" class="original-price">{{price.default_original_formated}}</b-col>
      <b-col v-if="discount" class="discount-price">Save {{savePrice}}</b-col>
    </b-row>
    <b-button v-if="inStock" @click="click(index)" class="btn-block" href="#" v-b-modal.modal-1>Add +</b-button>
    <b-button v-else @click="click(index)" class="btn-block" href="#" v-b-modal.modal-2>Notify Me</b-button>
  </b-card>
</template>

<style lang="scss">
  $bgColor: #f8f8f8;
  $fontLight: #6c757d;
  $colorRed: rgb(218, 49, 41);
  $colorLightGreen: rgb(162, 241, 175);
  $fontSmall: 0.8rem;

  .product-card {
    margin-bottom: 2rem;
    background-color: $bgColor !important;

    .brand-image {
      margin-bottom: 0.5rem;
    }
    .add-favorite {
      text-align: right;
      margin-bottom: 0.5rem;
      margin-top: -0.5rem;
    }
    .img-responsive {
      max-width: 100%;
    }
    .brand {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .brand-name {
      font-size: $fontSmall;
      color: $fontLight;
      margin-bottom: 0.5rem;
    }
    .default-price {
      color: $colorRed;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .discount-percent {
      text-align: right;
      margin-bottom: 0.5rem;

      span {
        display: inline-block;
        padding: 0.2rem 0.5rem;
        background-color: $colorLightGreen;
      }
    }
    .original-price {
      text-decoration: line-through;
      margin-bottom: 0.5rem;
    }
    .discount-price {
      text-align: right;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  }
</style>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      isMarkedFavorite: false,
    }
  },
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
      type: Object
    },
    stock: {
      type: Number
    },
    index: {
      type: Number
    },
    click: {
      type: Function
    }
  },
  computed: {
    discount() {
      const discount = this.price.default_original - this.price.default
      return discount > 0 ? discount : null;
    },
    savePrice() {
      const discount = this.discount;
      return discount > 0 ? `${this.discount} ${this.currency}` : null
    },
    offPercent() {
      const discount = this.discount;
      return discount > 0 ? Math.round(((this.discount) / this.price.default_original) * 100) : null
    },
    inStock() {
      return this.stock > 0 ? true : false
    }
  },
  methods: {
    handleClick() {
      this.isMarkedFavorite = !this.isMarkedFavorite
    }
  }
}
</script>