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
                    <span @click="seeMoreDetails(latestLog.druggie_substance)">{{ latestLog.timePassed }}</span>
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
    seeMoreDetails(substance) {
      this.$router.push(`/log/${substance}`);
    },
    groupLogsBySubstance() {
      this.latestLogsBySubstance = {};
      this.logs.forEach((log) => {
        const substance = log.druggie_substance;
        if (!this.latestLogsBySubstance[substance]) {
          this.latestLogsBySubstance[substance] = log;
        } else {
          const currentLatestLog = this.latestLogsBySubstance[substance];
          if (log.druggie_consumptions > currentLatestLog.druggie_consumptions) {
            this.latestLogsBySubstance[substance] = log;
          }
        }
      });
    },
    startTimer() {
      this.updateTimePassed();
      this.timer = setInterval(() => {
        this.updateTimePassed();
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    updateTimePassed() {
      const currentTime = new Date();

      Object.values(this.latestLogsBySubstance).forEach((latestLog) => {
        latestLog.timePassed = this.getTimePassed(latestLog.druggie_consumptions, currentTime);
      });
    },
    getTimePassed(consumptions, currentTime) {
      if (!consumptions) {
        return '';
      }

      const [time, date] = consumptions.split(' ');
      const [hours, minutes] = time.split(':');
      const [day, month, year] = date.split('.');

      const initialTime = new Date(
        parseInt(year, 10) + 2000,
        parseInt(month, 10) - 1,
        parseInt(day, 10),
        parseInt(hours, 10),
        parseInt(minutes, 10)
      );

      const timeDiffInSeconds = Math.floor((currentTime - initialTime) / 1000);
      const hoursPassed = Math.floor(timeDiffInSeconds / 3600);
      const minutesPassed = Math.floor((timeDiffInSeconds % 3600) / 60);
      const secondsPassed = timeDiffInSeconds % 60;

      return `${hoursPassed.toString().padStart(2, '0')}:${minutesPassed.toString().padStart(2, '0')}:${secondsPassed.toString().padStart(2, '0')}`;
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
