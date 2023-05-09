<template>
    <div class="history">
        <p>history</p>
        <HomeButton />
    </div>
  </template>
  
  <script>
  import HomeButton from './HomeButton.vue';

  export default {
    name: 'ViewHistory',
    components: {
      HomeButton
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  