<template>
  <div class="about-container middle-main-container">
    <div class="middle-main-content">
      <div class="small-container">
        <div class="about text-center">
          <h2 class="page-subtitle">ABOUT</h2>
          <p>Druggie is an innovative app designed to help individuals track their substance intake, whether it's prescription medication, over-the-counter drugs, or recreational substances. With Druggie, you can easily record the details of each intake, including the type of substance, the amount taken, and the time of consumption. The app also provides insights into your usage patterns, enabling you to better manage your intake and make informed decisions about your health.</p>
          <p>Using Druggie to track your substance intake has several benefits. Firstly, it helps you stay accountable and mindful of your consumption habits, which is crucial for those who are managing chronic conditions or taking medications with potential side effects. Secondly, the app can help you detect any patterns or trends in your usage, allowing you to make informed decisions about adjusting your intake or seeking medical advice if needed. With Druggie, you can take control of your substance intake and make more informed choices about your health and well-being.</p>
          <p>Like what you see? Reach out at hi@druggie.app</p>
        </div>
      </div>
    </div>
    <div class="main-footer">
      <HomeButton />
    </div>
  </div>
  </template>
  
  <script>
  import HomeButton from './HomeButton.vue';

  export default {
    name: 'AboutSection',
    components: {
      HomeButton
    }

  }
  </script>
  
  <style scoped>

  </style>
  