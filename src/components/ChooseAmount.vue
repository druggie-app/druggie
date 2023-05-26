<template>
  <div class="amount-wrapper">
    <div class="middle-main-container" v-if="!isShowOthers">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">How much did you take?</h2>
          <div class="amount_items" id="amount_options" v-if="amounts.length > 0">
            <div class="amount_item" v-for="(value, key) in amounts" :key="key">
              <span @click="nextPage(value)">{{value}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <div class="btn-secondary others-btn" @click="otherIntakeMethod">Others</div>
      </div>
    </div>
    <div class="middle-main-container" v-if="isShowOthers">
      <div class="middle-main-content">
        <div class="small-container text-center">
           <h2 class="page-subtitle">How much did you take?</h2>
          <div class="input-control">
            <input class="input-field" type="text" v-model="other">
          </div>
          <button class="btn-secondary submit-btn" @click="submitOtherIntake">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseAmount',
  data() {
    return {
      isShowOthers: false,
      other: "",
      amounts: [
        '1 Line',
        '2 Lines',
        '1 Dump'
      ]
    };
  },
  methods: {
    async nextPage(amount) {
      await localStorage.setItem('druggie_amount', amount)
      await this.$router.push(`/choose-timestamp`)
    },
    otherIntakeMethod(){
      this.isShowOthers = true
    },
    submitOtherIntake(){
      this.isShowOthers = false
      this.nextPage(this.other)
    }
  }
};
</script>
<style scoped>
.amount_items{
  display: flex;
  flex-wrap: wrap;
}
.amount_item{
  padding: 0 8px 10px;
  width: 50%;
}
.amount_item span{
  background: #FDF3CA;
  border-radius: 10px;
  padding: 6px 15px;
  cursor: pointer;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>