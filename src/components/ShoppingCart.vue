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
        <p class="shipping-price price">
          <span v-if="transportPrice === 0">免費</span>
          <span v-else>{{ transportPrice }}</span>
        </p>
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
      const product = this.products.find((product) => product.id === id);
      const newNumber = product.number + 1;
      if (newNumber >= 6) {
        alert("超過商品可購買數量！");
        return;
      }
      this.emitNewNumber(product.id, newNumber);
    },
    minusNumber(id) {
      const product = this.products.find((product) => product.id === id);
      const newNumber = product.number - 1;
      if (newNumber <= 0) {
        alert("少於商品購買最小數量！");
        return;
      }
      this.emitNewNumber(product.id, newNumber);
    },
    emitNewNumber(id, newNumber) {
      this.$emit("emit-new-number", {
        id,
        newNumber,
      });
    },
  },
};
</script>