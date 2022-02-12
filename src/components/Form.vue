<template>
  <div class="form-panel mt-6">
    <div class="form-container h-100">
      <form
        action=""
        id="a-form"
        class="h-100 d-flex flex-column justify-content-between"
      >
        <div class="form-content">
          <div class="part" :class="{ 'd-none': currentStepId !== 1 }">
            <h2 class="part-title">寄送地址</h2>
            <div class="row">
              <div class="form-row col-4 col-xs-4 d-flex flex-column">
                <label for="title">稱謂</label>
                <div class="select-wrapper">
                  <select name="title" id="title">
                    <option value="">請選擇稱謂</option>
                    <option value="">女士</option>
                    <option value="">先生</option>
                    <option value="">其他</option>
                  </select>
                </div>
              </div>
              <div class="form-row col-8 col-xs-8 d-flex flex-column">
                <label for="name">姓名</label>
                <input type="text" placeholder="請輸入姓名" id="name" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-12 col-xs-6 d-flex flex-column mb-4">
                <label for="tel">電話</label>
                <input type="text" placeholder="請輸入行動電話" id="tel" />
              </div>
              <div class="form-row col-12 col-xs-6 d-flex flex-column">
                <label for="email">Email</label>
                <input type="text" placeholder="請輸入電子郵件" id="email" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-12 col-xs-4 d-flex flex-column mb-4">
                <label for="area">縣市</label>
                <div class="select-wrapper">
                  <select name="" id="area">
                    <option value="">請選擇居住縣市</option>
                    <option value="">台北市</option>
                    <option value="">新北市</option>
                    <option value="">桃園市</option>
                    <option value="">台中市</option>
                    <option value="">台南市</option>
                    <option value="">高雄市</option>
                  </select>
                </div>
              </div>
              <div class="form-row col-12 col-xs-8 d-flex flex-column">
                <label for="address">地址</label>
                <input type="text" placeholder="請輸入地址" id="address" />
              </div>
            </div>
          </div>
          <div class="part" :class="{ 'd-none': currentStepId !== 2 }">
            <h2 class="part-title">運送方式</h2>
            <div class="form-row">
              <div
                v-for="option in transportOptions"
                :key="option.id"
                class="row"
              >
                <div class="col-12 col-sx-12">
                  <div class="radio-container">
                    <div class="radio-content">
                      <input
                        v-model="transportId"
                        name="transport"
                        type="radio"
                        :value="option.id"
                        :id="option.label"
                      />
                      <div class="label-container">
                        <label
                          :for="option.label"
                          :class="{ 'font-weight-700': option.id === 2 }"
                          >{{ option.name }}</label
                        >
                        <label :for="option.label">{{ option.time }}</label>
                      </div>
                    </div>
                    <div class="radio-price">
                      <p>{{ option.priceDescription }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="part" :class="{ 'd-none': currentStepId !== 3 }">
            <h2 class="part-title">付款資訊</h2>
            <div class="row">
              <div class="form-row col-12 col-sx-8 d-flex flex-column">
                <label for="owner-name">持卡人姓名</label>
                <input type="text" placeholder="Kuan-Yu" id="owner-name" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-12 col-sx-8 d-flex flex-column">
                <label for="card-number">卡號</label>
                <input
                  type="text"
                  placeholder="1111 2222 3333 4444"
                  id="card-number"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-6 col-sx-6 d-flex flex-column">
                <label for="card-date">有效期限</label>
                <input type="text" placeholder="MM/YY" id="card-date" />
              </div>
              <div class="form-row col-6 col-sx-6 d-flex flex-column">
                <label for="card-check">CVC/CCV</label>
                <input type="text" placeholder="123" id="card-check" />
              </div>
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <div id="btn-control" class="btn-container">
            <!--       使用row-reverse順序相反       -->
            <button
              type="submit"
              @click.stop.prevent="handleSubmit"
              v-if="currentStepId === steps.length"
              class="btn-next-step"
            >
              確認下單
            </button>
            <button
              v-else
              @click.stop.prevent="handleNextBtn"
              class="btn-next-step"
            >
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    currentStepId: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
    // 用於render貨運選項
    transportOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      transportId: 1,
    };
  },
  methods: {
    // Step control buttons and emit function to Alphashop
    handlePreBtn() {
      const newStepId = this.currentStepId - 1;
      this.emitNewStep(newStepId);
    },
    handleNextBtn() {
      const newStepId = this.currentStepId + 1;
      this.emitNewStep(newStepId);
    },
    emitNewStep(newStepId) {
      this.$emit("emit-new-step-id", {
        newStepId,
      });
    },
    //TODO: submit function
    handleSubmit() {
      console.log("submit form");
    },
  },
  watch: {
    // transportId發生改變時(v-model綁定form選項)，回傳至父層
    transportId: function emitTransportId() {
      this.$emit("emit-transport-id", {
        transportId: Number(this.transportId),
      });
    },
  },
};
</script>