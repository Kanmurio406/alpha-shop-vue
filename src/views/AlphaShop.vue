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
          <Stepper />
          <Form />
          <FormBtns />
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

export default {
  components: {
    Stepper,
    Form,
    FormBtns,
    ShoppingCart,
  },
};
</script>

