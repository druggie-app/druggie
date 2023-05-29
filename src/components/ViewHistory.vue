<template>
  <div class="history-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">History</h2>
          <div class="history_items">
            <div class="history_item" v-for="(latestLog, substance) in latestLogsBySubstance" :key="substance">
              <div>
                <h3 class="substance-title">{{ substance }}</h3>
                <div>
                  <div>
                    <span @click="seeMoreDetails(latestLog.druggie_timestamp)">{{ getTimePassed(latestLog.druggie_timestamp) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <router-link to="/" class="btn-secondary addmore-btn">Add More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewHistory",
  data() {
    return {
      logs: [],
      latestLogsBySubstance: {},
      currentTime: new Date(),
      timer: null,
    };
  },
  mounted() {
    if (localStorage.getItem("druggie_history")) {
      this.logs = JSON.parse(localStorage.getItem("druggie_history"));
      this.groupLogsBySubstance();
    }

    this.startTimer();
  },
  beforeUnmount() {
    this.stopTimer();
  },
  methods: {
    seeMoreDetails(timestamp) {
      this.$router.push(`/log/${timestamp}`);
    },
    groupLogsBySubstance() {
      this.latestLogsBySubstance = {};
      this.logs.forEach((log) => {
        const substance = log.druggie_substance;
        if (!this.latestLogsBySubstance[substance]) {
          this.latestLogsBySubstance[substance] = log;
        } else {
          const currentLatestLog = this.latestLogsBySubstance[substance];
          if (log.druggie_timestamp > currentLatestLog.druggie_timestamp) {
            this.latestLogsBySubstance[substance] = log;
          }
        }
      });
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    getTimePassed(timestamp) {
      const initialTime = new Date(timestamp);

      const timeDiff = this.currentTime - initialTime;

      const secondsPassed = Math.floor(timeDiff / 1000);
      const minutesPassed = Math.floor(secondsPassed / 60);
      const hoursPassed = Math.floor(minutesPassed / 60);

      return `${hoursPassed % 24}:${minutesPassed % 60}:${secondsPassed % 60}`;
    },
  },
};
</script>

<style scoped>
/* Styles for grouping logs */
.substance-title {
  margin: 0;
  font-size: 16px;
}

/* Existing styles */
.history_items {
  display: flex;
  flex-wrap: wrap;
}

.history_item {
  background: #fdf3ca;
  border-radius: 5px;
  padding: 6px 15px;
  cursor: pointer;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48%;
  margin: 3px;
}
</style>
