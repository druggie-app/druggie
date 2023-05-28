<template>
  <div class="main-content">
    <div class="desktop dektop-landing-content text-center">
      <div id="homepage" v-if="!isShowOthers">
        <div class="small-container">
          <div class="landing-desc text-center">
            Track your intake
          </div>
          <div class="img-block">
            <img class="nose-img" src="../assets/nose-icon.png" alt="Nose Icon">
            <img class="mouth-img" alt="Mouth logo" src="../assets/logo.png">
          </div>
          <router-link to="/install" class="btn-primary install-btn">Install</router-link>
        </div>
        <div class="support-block">
          <router-link to="/about" class="btn-secondary support-btn">Support</router-link>
        </div>
      </div>
    </div>
    <div class="mobile mobile-landing-content">
      <div class="text-center middle-main-container" id="homepage" v-if="!isShowOthers">
        <div class="middle-main-content">
          <div class="img-block">
            <img class="nose-img" src="../assets/nose-icon.png" alt="Nose Icon" @click="navigateToIntakeMethod('nose')">
            <img class="mouth-img" alt="Mouth logo" src="../assets/logo.png" @click="navigateToIntakeMethod('mouth')">
          </div>
        </div>
        <div class="main-footer">
          <div class="btn-secondary others-btn" @click="otherIntakeMethod">Others</div>
        </div>
      </div>
      <div class="middle-main-container" v-if="isShowOthers">
        <div class="middle-main-content">
          <div class="small-container text-center">
            <div class="input-control">
              <input class="input-field" type="text" v-model="other">
            </div>
            <button class="btn-secondary submit-btn" @click="submitOtherIntake">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return {
      isShowOthers: false,
      other: ""
    }
  },
  methods:{
    async navigateToIntakeMethod(intakeMethod) {
      await localStorage.setItem('druggie_method', intakeMethod)
      await this.$router.push(`/choose-substance`)
    },
    otherIntakeMethod(){
      this.isShowOthers = true
    },
    submitOtherIntake(){
      this.isShowOthers = false
      this.navigateToIntakeMethod(this.other)
    }
  }
}
</script>

<style scoped>
.img-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.support-block{
  background: url('../assets/line-img.svg') no-repeat center top;
  background-size: 100% auto;
  padding-top: 80px;
  text-align: center;
  margin-top: 30px;
}
.landing-desc{
  font-size: 26px;
  line-height: 1.4;
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  
}
@media screen and (max-width: 767px) {
  
}
</style>
