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
                <label for="">稱謂</label>
                <div class="select-wrapper">
                  <select name="" id="">
                    <option value="">請選擇稱謂</option>
                    <option value="">女士</option>
                    <option value="">先生</option>
                    <option value="">其他</option>
                  </select>
                </div>
              </div>
              <div class="form-row col-8 col-xs-8 d-flex flex-column">
                <label for="">姓名</label>
                <input type="text" placeholder="請輸入姓名" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-12 col-xs-6 d-flex flex-column mb-4">
                <label for="">電話</label>
                <input type="text" placeholder="請輸入行動電話" />
              </div>
              <div class="form-row col-12 col-xs-6 d-flex flex-column">
                <label for="">Email</label>
                <input type="text" placeholder="請輸入電子郵件" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-12 col-xs-4 d-flex flex-column mb-4">
                <label for="">縣市</label>
                <div class="select-wrapper">
                  <select name="" id="">
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
                <label for="">地址</label>
                <input type="text" placeholder="請輸入地址" />
              </div>
            </div>
          </div>
          <div class="part" :class="{ 'd-none': currentStepId !== 2 }">
            <h2 class="part-title">運送方式</h2>
            <div class="form-row">
              <div class="row">
                <div class="col-12 col-sx-12">
                  <div class="radio-container">
                    <div class="radio-content">
                      <input name="transport" type="radio" value="standard" />
                      <div class="label-container">
                        <label for="">標準運送</label>
                        <label for="">約3~7個工作天</label>
                      </div>
                    </div>
                    <div class="radio-price">
                      <p>免費</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sx-12">
                  <div class="radio-container">
                    <div class="radio-content">
                      <input name="transport" type="radio" value="DHL" />
                      <div class="label-container">
                        <label for="" class="font-weight-700">DHL貨運</label>
                        <label for="">48小時內送達</label>
                      </div>
                    </div>
                    <div class="radio-price">
                      <p>$500</p>
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
                <label for="">持卡人姓名</label>
                <input type="text" placeholder="Kuan-Yu" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-12 col-sx-8 d-flex flex-column">
                <label for="">卡號</label>
                <input type="text" placeholder="1111 2222 3333 4444" />
              </div>
            </div>
            <div class="row">
              <div class="form-row col-6 col-sx-6 d-flex flex-column">
                <label for="">有效期限</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div class="form-row col-6 col-sx-6 d-flex flex-column">
                <label for="">CVC/CCV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <div id="btn-control" class="btn-container">
            <!--       使用row-reverse順序相反       -->
            <button
              type="submit"
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