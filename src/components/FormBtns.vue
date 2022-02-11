<template>
  <div class="btn-panel">
    <div id="btn-control" class="btn-container">
      <!--       使用row-reverse順序相反       -->
      <button v-if="currentStepId === 3" class="btn-next-step">確認下單</button>
      <button v-else @click.stop.prevent="handleNextBtn" class="btn-next-step">
        下一步 →
      </button>
      <button
        class="btn-pre-step"
        @click.stop.prevent="handlePreBtn"
        :class="{ 'd-none': currentStepId === 1 }"
      >
        ← 上一步
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormBtns",
  props: {
    currentStepId: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handlePreBtn() {
      this.$emit("click-pre-button", {
        newStepId: this.currentStepId - 1,
      });
    },
    handleNextBtn() {
      this.$emit("click-next-button", {
        newStepId: this.currentStepId + 1,
      });
    },
    handleSubmitBtn() {},
  },
};
</script>