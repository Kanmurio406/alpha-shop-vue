<template>
  <div id="cart-btn-panel" class="shopping-cart-panel">
    <div class="shopping-cart-container">
      <div id="shopping-cart-products" class="products">
        <div v-for="product in products" :key="product.id" class="product">
          <img :src="product.img" :alt="product.name" class="product-photo" />
          <div class="product-info">
            <div class="left-info">
              <p class="product-name">{{ product.name }}</p>
              <div class="product-number-container">
                <button @click="minusNumber(product.id)" class="minus-label">
                  -
                </button>
                <div class="number">{{ product.number }}</div>
                <button @click="addNumber(product.id)" class="plus-label">
                  +
                </button>
              </div>
            </div>
            <div class="right-info">
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shipping-price-container">
        <p class="shipping-price-title">運費</p>
        <p class="shipping-price price">免費</p>
      </div>
      <div class="total-price-container">
        <p class="total-price-title">小計</p>
        <p id="total-price-panel" class="total-price price">{{ totalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    products: {
      type: Array,
      required: true,
    },
    transportPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addNumber(id) {
      let product = this.products.filter((product) => product.id === id)[0];
      this.$emit("add-number", {
        id: product.id,
        newNumber: product.number + 1,
      });
    },
    minusNumber(id) {
      let product = this.products.filter((product) => product.id === id)[0];
      this.$emit("minus-number", {
        id: product.id,
        newNumber: product.number - 1,
      });
    },
  },
};
</script>