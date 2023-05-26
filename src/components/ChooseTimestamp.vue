<template>
  <div class="timestamp-wrapper">
    <div class="middle-main-container">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">Time of consumption</h2>
          <div class="consumption_items" id="consumption_options" v-if="consumptions.length > 0">
            <div class="consumption_item" v-for="(value, key) in consumptions" :key="key">
              <span @click="nextPage(value)">{{value}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseTimestamp',
  data() {
    return {
      consumptions: [
        '07:00AM to 08:00AM',
        '08:00AM to 09:00AM',
        '09:00AM to 10:00AM',
        '10:00AM to 11:00AM',
        '11:00AM to 12:00PM',
        '12:00PM to 01:00PM'
      ]
    };
  },
  methods: {
    async nextPage(consumption) {
      await localStorage.setItem('druggie_consumptions', consumption)

      var druggieHistory = []
      if(localStorage.getItem('druggie_history')){
          druggieHistory = JSON.parse(localStorage.getItem('druggie_history'));
      }
      await druggieHistory.push({
          'druggie_timestamp': new Date().getTime(),
          'druggie_method': localStorage.getItem('druggie_method'),
          'druggie_substance': localStorage.getItem('druggie_substance'),
          'druggie_amount': localStorage.getItem('druggie_amount'),
          'druggie_consumptions': localStorage.getItem('druggie_consumptions')
      })
      await localStorage.setItem('druggie_history',  JSON.stringify(druggieHistory));
      await this.$router.push(`/history`)
    }
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
</style>