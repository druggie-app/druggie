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
          <div class="amount_items" id="amount_options" v-if="amounts.length == 0">
            <div class="amount_item">
              <span>Amounts not found.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <div class="btn-secondary others-btn" @click="otherIntakeMethod">Add more</div>
      </div>
    </div>
    <div class="middle-main-container" v-if="isShowOthers">
      <div class="middle-main-content">
        <div class="small-container text-center">
           <h2 class="page-subtitle">How much did you take?</h2>
          <div class="input-control">
            <input class="input-field" type="text" v-model="other">
          </div>
          <button class="btn-secondary submit-btn" @click="submitOtherIntake">Add</button>
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
      amounts: []
      // amounts: [
      //   '1 Line',
      //   '2 Lines',
      //   '1 Dump'
      // ]
    };
  },
  mounted(){
    if(localStorage.getItem('druggie_amount_history')){
      this.amounts = JSON.parse(localStorage.getItem('druggie_amount_history'))
    }
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
      let amountsHistory = []
      if(localStorage.getItem('druggie_amount_history')){
        amountsHistory = JSON.parse(localStorage.getItem('druggie_amount_history'))
      }
      amountsHistory.push(this.other)
      this.amounts = amountsHistory
      localStorage.setItem('druggie_amount_history', JSON.stringify(amountsHistory))
      this.other = ""
      this.isShowOthers = false
    }
  }
};
</script>
<style scoped>
.amount_items{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.amount_item{
  padding: 0 10px 10px;
  font-weight: 600;
  /* width: 50%; */
}

.amount_item:nth-child(1){
  font-size: 125%;
}

.amount_item:nth-child(3){
  font-size: 150%;
}
.amount_item:nth-child(4){
  font-size: 170%;
}
.amount_item:nth-child(5){
  font-size: 90%;
}
.amount_item:nth-child(6){
  font-size: 180%;
}
.amount_item:nth-child(7){
  font-size: 200%;
}
.amount_item:nth-child(8){
  font-size: 140%;
}
.amount_item:nth-child(10){
  font-size: 170%;
}
.amount_item:nth-child(12){
  font-size: 240%;
}
.amount_item:nth-child(13){
  font-size: 140%;
}
.amount_item:nth-child(15){
  font-size: 170%;
}
.amount_item:nth-child(17){
  font-size: 240%;
}

.amount_item:nth-child(18){
  font-size: 150%;
}
.amount_item:nth-child(19){
  font-size: 170%;
}
.amount_item:nth-child(21){
  font-size: 90%;
}
.amount_item:nth-child(22){
  font-size: 180%;
}
.amount_item:nth-child(23){
  font-size: 200%;
}
.amount_item:nth-child(24){
  font-size: 140%;
}
/* .amount_item span{
  background: #FDF3CA;
  border-radius: 10px;
  padding: 6px 15px;
  cursor: pointer;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
} */
</style>