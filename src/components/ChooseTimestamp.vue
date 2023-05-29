<template>
  <div class="timestamp-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">When did you take it?</h2>
          <div class="clock-centered">
            <RotatingClock  @timestamp-selected="handleTimestampSelected"/>
            <div class="middle-bellow-content">
              Selected Time: {{ selectedTimestamp }}
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <button class="btn-secondary submit-btn" @click="nextPage(selectedTimestamp)">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import RotatingClock from './RotatingClock.vue';

export default {
    name: "ChooseTimestamp",
    components: { RotatingClock },
    data() {
      return {
        selectedTimestamp: ''
      };
    },
    methods: {
      handleTimestampSelected(timestamp) {
      this.selectedTimestamp = timestamp;
    },
        async nextPage(consumption) {
            await localStorage.setItem("druggie_consumptions", consumption);
            var druggieHistory = [];
            if (localStorage.getItem("druggie_history")) {
                druggieHistory = JSON.parse(localStorage.getItem("druggie_history"));
            }
            const timestamp = new Date().getTime();
            const druggieConsumptions = (consumption === "now") ? timestamp.toString() : localStorage.getItem("druggie_consumptions");
            await druggieHistory.push({
                "druggie_timestamp": new Date().getTime(),
                "druggie_method": localStorage.getItem("druggie_method"),
                "druggie_substance": localStorage.getItem("druggie_substance"),
                "druggie_amount": localStorage.getItem("druggie_amount"),
                "druggie_consumptions": druggieConsumptions
            });
            await localStorage.setItem("druggie_history", JSON.stringify(druggieHistory));
            await this.$router.push(`/history`);
        },
    }
};
</script>
<style scoped>
.consumption_items{
  display: flex;
  flex-wrap: wrap;
}
.consumption_item{
  padding: 0 0 10px;
  width: 100%;
}
.consumption_item span{
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

.middle-bellow-content {
  margin: 50px;
}

.clock-centered {
  margin-top: 150px;
}
</style>