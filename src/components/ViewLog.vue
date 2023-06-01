<template>
  <div class="log-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">Log Entry:</h2>
          <div class="log-items" v-if="filteredLogs.length > 0">
            <table>
              <thead>
                <tr>
                  <th>Intake Method</th>
                  <th>Amount</th>
                  <th>Time Passed</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="log in filteredLogs" :key="log.id">
                  <td>{{ log.druggie_method }}</td>
                  <td>{{ log.druggie_amount }}</td>
                  <td>{{ getFormattedTimePassed(log.druggie_consumptions) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <p>No logs found for the specified substance.</p>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <div class="w-full">
          <router-link to="/history" class="footer-action-link addmore-link">View All</router-link>
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
  components: {
    HomeButton,
  },
  data() {
    return {
      filteredLogs: [],
      currentTime: new Date(), // Track the current time
    };
  },
  computed: {
    getFormattedTimePassed() {
      return (consumptions) => {
        if (!consumptions) {
          return "";
        }

        const [time, date] = consumptions.split(" ");
        const [hours, minutes] = time.split(":");
        const [day, month, year] = date.split(".");

        const initialTime = new Date(
          parseInt(year, 10) + 2000,
          parseInt(month, 10) - 1,
          parseInt(day, 10),
          parseInt(hours, 10),
          parseInt(minutes, 10)
        );

        const timeDiffInMilliseconds = this.currentTime - initialTime;
        const timeDiffInSeconds = Math.floor(timeDiffInMilliseconds / 1000);
        const hoursPassed = Math.floor(timeDiffInSeconds / 3600);
        const minutesPassed = Math.floor((timeDiffInSeconds % 3600) / 60);
        const secondsPassed = timeDiffInSeconds % 60;

        const formattedTimePassed = `${hoursPassed
          .toString()
          .padStart(2, "0")}:${minutesPassed
          .toString()
          .padStart(2, "0")}:${secondsPassed.toString().padStart(2, "0")}`;
        return formattedTimePassed;
      };
    },
  },
  mounted() {
    if (localStorage.getItem("druggie_history")) {
      const logs = JSON.parse(localStorage.getItem("druggie_history"));
      const substance = this.$route.params.substance;
      this.filterLogsBySubstance(logs, substance);
    }

    // Start the timer to update the current time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
  watch: {
    $route(to, from) {
      if (to.params.substance !== from.params.substance) {
        const logs = JSON.parse(localStorage.getItem("druggie_history"));
        const substance = to.params.substance;
        this.filterLogsBySubstance(logs, substance);
      }
    },
  },
  methods: {
    filterLogsBySubstance(logs, substance) {
      this.filteredLogs = logs
        .filter((log) => log.druggie_substance === substance)
        .sort((a, b) => new Date(b.druggie_consumptions) - new Date(a.druggie_consumptions));
    },
  },
};
</script>

<style scoped>
.log-items table {
  width: 100%;
  border-collapse: collapse;
}

.log-items th,
.log-items td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.log-items th {
  text-align: left;
}

.log-items tr:last-child td {
  border-bottom: none;
}
</style>
