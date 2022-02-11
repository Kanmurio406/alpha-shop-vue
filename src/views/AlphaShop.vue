<template>
  <main class="main-content">
    <div class="main-content-container container-fluid">
      <div class="row justify-content-between">
        <h1 class="main-content-title col-12 col-xs-12">結帳</h1>
        <div
          class="
            left-content
            mt-6
            col-12 col-xs-6
            d-flex
            flex-column
            justify-content-between
          "
        >
          <Stepper :steps="steps" :current-step-id="currentStepId" />
          <Form
            :steps="steps"
            :current-step-id="currentStepId"
            @emit-new-step-id="handleFormBtn"
          />
        </div>
        <div class="right-content mt-6 col-12 col-xs-5">
          <ShoppingCart
            :products="products"
            :transport-price="transportPrice"
            :total-price="totalPrice"
            @emit-new-number="handleProductNumber"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="sass">
@import "../assets/scss/reset.scss"
@import "../assets/scss/setting.scss"
@import "../assets/scss/style.scss"
</style>

<script>
import Stepper from "../components/Stepper.vue";
import Form from "../components/Form.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

const dummySteps = [
  {
    id: 1,
    name: "寄送地址",
  },
  {
    id: 2,
    name: "運送方式",
  },
  {
    id: 3,
    name: "付款資料",
  },
];

const dummyProducts = [
  {
    id: 1,
    img: "https://i.imgur.com/AKz0WnJ.png",
    name: "破壞補丁修身牛仔褲",
    number: 1,
    price: 3999,
  },
  {
    id: 2,
    img: "https://imgur.com/HDJ26UH.png",
    name: "刷色直筒牛仔褲",
    number: 1,
    price: 1299,
  },
];

export default {
  name: "AlphaShop",
  components: {
    Stepper,
    Form,
    ShoppingCart,
  },
  data() {
    return {
      currentStepId: 1,
      steps: [],
      products: [],
      transportPrice: 0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.steps = dummySteps;
      this.products = dummyProducts;
    },
    handleFormBtn(payload) {
      const { newStepId } = payload;
      this.currentStepId = newStepId;
    },
    handleProductNumber(payload) {
      const { id, newNumber } = payload;
      let product = this.products.filter((product) => product.id === id)[0];
      // filter展開多個物件陣列的情形下，如果物件本身沒被展開，指向的仍是相同儲存位置(淺拷貝)，因此直接更改number即可
      product.number = newNumber;
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.products.forEach(function (product) {
        totalPrice += product.number * product.price;
      });
      totalPrice += this.transportPrice;
      return totalPrice;
    },
  },
};
</script>

