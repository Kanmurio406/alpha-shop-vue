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
          <Form />
          <FormBtns
            :steps="steps"
            :current-step-id="currentStepId"
            @click-pre-button="clickPreBtn"
            @click-next-button="clickNextBtn"
          />
        </div>
        <div class="right-content mt-6 col-12 col-xs-5">
          <ShoppingCart />
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
import FormBtns from "../components/FormBtns.vue";
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

export default {
  name: "AlphaShop",
  components: {
    Stepper,
    Form,
    FormBtns,
    ShoppingCart,
  },
  data() {
    return {
      currentStepId: 1,
      steps: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.steps = dummySteps;
    },
    clickPreBtn(payload) {
      const { newStepId } = payload;
      this.currentStepId = newStepId;
    },
    clickNextBtn(payload) {
      const { newStepId } = payload;
      this.currentStepId = newStepId;
    },
  },
};
</script>

