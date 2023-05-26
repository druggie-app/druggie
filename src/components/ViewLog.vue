<template>
   <div class="log-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">Log Entry:</h2>
          <div class="log-items" v-if="Object.keys(log).length > 0">
            <p><strong>Intake Method:</strong> {{ log.druggie_method }}</p>
            <p><strong>Substance:</strong> {{ log.druggie_substance }}</p>
            <p><strong>Amount:</strong> {{ log.druggie_amount }}</p>
            <p><strong>Consumptions:</strong> {{ log.druggie_consumptions }}</p>
            <!-- <p><strong>Timestamp:</strong> {{ logEntry.timestamp }}</p> -->
          </div>
        </div>
      </div>
      <div class="main-footer">
        <div class="w-full">
          <router-link to="/history"  class="footer-action-link addmore-link">View All</router-link>
        </div>
        <HomeButton />
      </div>
    </div>
  </div>
</template>
  
<script>
import HomeButton from "./HomeButton.vue";

export default {
  name: "ViewLog",
  props: {
    timestamp: {
      type: String,
      required: true
    }
  },
  components: {
    HomeButton,
  },
  data(){
    return {
      log: {}
    }
  },
  mounted(){
    let that = this
    if(localStorage.getItem('druggie_history')){
      var logs = JSON.parse(localStorage.getItem('druggie_history'))
      if(logs.length > 0){
        logs.forEach((value)=>{
          if(value.druggie_timestamp == that.timestamp){
            that.log = value
          }
        })
      }
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-items p{
  margin: 0 0 10px;
}
</style>
  