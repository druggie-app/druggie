<template>
    <div class="install-container">
        <div class="install">
            <p>Installation</p>
            <div class="button-container">
                <div class="install-instruction" @click="isIOS = true; isAndroid = false">
                <i class="fab fa-apple"></i>
                <p>Add to Home Screen (iOS)</p>
                </div>
                <div class="install-instruction" @click="isIOS = false; isAndroid = true">
                <i class="fab fa-android"></i>
                <p>Add to Home Screen (Android)</p>
                </div>
            </div>
            <div v-if="isIOS" class="install-instructions-details">
                <p>1. Open Safari and navigate to the Druggie website.</p>
                <p>2. Tap the "Share" icon (the box with an arrow pointing up) at the bottom of the screen.</p>
                <p>3. Scroll down and tap "Add to Home Screen".</p>
                <p>4. Customize the name of the app (if desired) and tap "Add".</p>
                <p>5. The Druggie app will now be added to your home screen.</p>
            </div>
            <div v-if="isAndroid" class="install-instructions-details">
                <p>1. Open Chrome and navigate to the Druggie website.</p>
                <p>2. Tap the three-dot icon in the top right corner of the screen.</p>
                <p>3. Select "Add to Home screen" from the drop-down menu.</p>
                <p>4. Customize the name of the app (if desired) and tap "Add".</p>
                <p>5. The Druggie app will now be added to your home screen.</p>
            </div>
            <HomeButton />
        </div>
    </div>
  </template>
  
  <script>
  import HomeButton from "./HomeButton.vue";
  
  export default {
    name: "HowTo",
    components: {
      HomeButton,
    },
    data() {
      return {
        isIOS: true,
      };
    },
  };
  </script>
  
  <style scoped>
  .install-container {
    display: flex;
    justify-content: center;
  }

  .install {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin: 0 auto;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
  }
  
  .install-instructions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .install-instruction {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
  }
  
  .install-instruction p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  }
  
  .install-instructions-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  
  .install-instructions-details p {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    text-align: left;
  }
  
  i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  </style>
  