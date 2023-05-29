<template>
  <div class="log-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">Log Entry:</h2>
          <div class="log-items" v-if="filteredLogs.length > 0">
            <div v-for="(log, index) in filteredLogs" :key="index">
              <p><strong>Intake Method:</strong> {{ log.druggie_method }}</p>
              <p><strong>Amount:</strong> {{ log.druggie_amount }}</p>
              <p><strong>Time of Consumption:</strong> {{ log.druggie_consumptions }}</p>
            </div>
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
    };
  },
  mounted() {
    if (localStorage.getItem("druggie_history")) {
      const logs = JSON.parse(localStorage.getItem("druggie_history"));
      const substance = this.$route.params.substance;
      this.filterLogsBySubstance(logs, substance);
    }
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
      this.filteredLogs = logs.filter((log) => log.druggie_substance === substance);
    },
  },
};
</script>

<style scoped>
.log-items p {
  margin: 0 0 10px;
}
</style>
