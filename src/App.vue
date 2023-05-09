<template>
  <h1>DRUGGIE</h1>
  <router-view></router-view>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  background-color: #FFE576;
}

h1 {
  font-weight: bold;
  color: #000;
  font-family: Comic Neue, bold;
  font-size: xxx-large;
  padding-bottom: 20px;
}

.content {
  flex: 1;
}

.footer {
  background-color: black;
  color: white;
  padding: 20px;
  flex-shrink: 0;
}

.footer-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-button {
  flex: 1 0 30%;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 16px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .footer-button {
    flex: 1 0 100%;
  }
}
</style>
