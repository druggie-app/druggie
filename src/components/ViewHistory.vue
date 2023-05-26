 <template>
  <div class="history-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">History</h2>
          <div class="history_items">
            <div class="history_item" v-for="(value, key) in logs" :key="key">
              <span @click="seeMoreDetails(value.druggie_timestamp)">{{`${value.druggie_method} - ${value.druggie_substance}`}}</span>
            </div>
          </div>
          <router-link to="/" class="addmore-link">Add More</router-link>
        </div>
      </div>
      <div class="main-footer">
        <HomeButton />
      </div>
    </div>
  </div>
</template>
  
  <script>
import HomeButton from "./HomeButton.vue";

export default {
  name: "ViewHistory",
  components: {
    HomeButton,
  },
  data(){
    return{
      logs: []
    }
  },
  mounted(){
    if(localStorage.getItem('druggie_history')){
      this.logs = JSON.parse(localStorage.getItem('druggie_history'))
    }
  },
  methods:{
    seeMoreDetails(timestamp){
      this.$router.push(`/log/${timestamp}`)
    }
  }
};
</script>


<!--<template>
  <div>
    <h2>Log Entry:</h2>
    <p><strong>Intake Method:</strong> {{ logEntry.intakeMethod }}</p>
    <p><strong>Substance:</strong> {{ logEntry.substance }}</p>
    <p><strong>Amount:</strong> {{ logEntry.amount }}</p>
    <p><strong>Timestamp:</strong> {{ logEntry.timestamp }}</p>
  </div>
</template>

<script>
export default {
  props: {
    logEntry: {
      type: Object,
      required: true
    }
  }
};
</script>
--->
  
<style scoped>
.history_items{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.history_item{
  padding: 0 5px 10px;
}
.history_item span{
  background: #FDF3CA;
  border-radius: 10px;
  padding: 6px 15px;
  display: block;
  cursor: pointer;
  min-width: 100px;
}
</style>