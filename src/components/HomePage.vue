<template>
  <div class="hello">
    <div id="homepage">
      <img src="../assets/nose-icon.png" alt="Nose Icon" @click="navigateToIntakeMethod('nose')">
      <img alt="Mouth logo" src="../assets/logo.png" @click="navigateToIntakeMethod('mouth')">
    </div>
    <router-link to="/install" class="install">Install</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
  navigateToIntakeMethod(intakeMethod) {
    this.$router.push(`/choose-substance/${intakeMethod}`)
    }
  }
}
</script>

<style scoped>
#homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.install {
  color: #000;
  font-family: Comic Neue;
  font-size: x-large;
  padding: 8px 16px;
  margin: 24px;
  background-color: #FDF3CA;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
}
</style>
