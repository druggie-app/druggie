<template>
    <div class="rotating-clock">
      <div class="clock-face">
        <div class="clock-hand" :style="handRotation"></div>
        <div class="clock-text">{{ displayTime }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RotatingClock',
    props: {
      currentTime: {
        type: Date,
        required: true,
      },
      startRotation: {
        type: Number,
        default: 90,
      },
    },
    computed: {
      displayTime() {
        return this.formatTime(this.currentTime);
      },
      handRotation() {
        const degreesPerHour = 30;
        const degreesPerMinute = 6;
  
        const hours = this.currentTime.getHours();
        const minutes = this.currentTime.getMinutes();
  
        const hourRotation = this.startRotation + hours * degreesPerHour + minutes / 2;
        const minuteRotation = this.startRotation + minutes * degreesPerMinute;
  
        return `rotate(${hourRotation}deg)`;
        
        // Uncomment the line below to enable minute hand rotation
        // return `rotate(${hourRotation}deg) rotate(${minuteRotation}deg)`;
      },
    },
    methods: {
      formatTime(time) {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .rotating-clock {
    position: relative;
    width: 200px;
    height: 200px;
    border: 2px solid #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .clock-face {
    position: relative;
    width: 80%;
    height: 80%;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  
  .clock-hand {
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: #333;
    transform-origin: right center;
    transition: transform 0.3s ease-in-out;
  }
  
  .clock-text {
    font-weight: bold;
  }
  </style>
  