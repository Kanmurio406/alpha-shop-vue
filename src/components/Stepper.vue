<template>
  <div class="stepper-panel">
    <div id="step-control" class="stepper-container">
      <div
        v-for="step in steps"
        :key="step.id"
        class="d-flex align-items-center"
      >
        <div
          class="step"
          :class="{
            active: step.id === currentStepId,
            checked: step.id < currentStepId,
          }"
        >
          <div class="circle-container"></div>
          <div class="label-container">{{ step.name }}</div>
        </div>
        <div v-if="step.id !== steps.length" class="connect-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
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
};
</script>