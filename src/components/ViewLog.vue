<template>
    <div class="log">
        <p>log</p>
        <HomeButton />
    </div>
  </template>
  
  <script>
  import HomeButton from './HomeButton.vue';

  export default {
    name: 'ViewLog',
    components: {
      HomeButton
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  