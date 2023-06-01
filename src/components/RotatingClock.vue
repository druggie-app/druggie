<template>
  <div class="rotating-clock"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="scroll-options">
      <div class="scroll-option" @click="handleClick('minute', -1)">
        {{ getScrollOption('minute', -1) }}
      </div>
    </div>
    <div v-if="selectedHour !== null && selectedMinute !== null" class="time-picker">
      <div class="picker-hour" @click="handleClick('hour')">
        {{ selectedHour.toString().padStart(2, '0') }}
      </div>
      <span>:</span>
      <div class="picker-minute" @click="handleClick('minute')">
        {{ selectedMinute.toString().padStart(2, '0') }}
      </div>
    </div>
    <div class="scroll-options">
      <div class="scroll-option" @click="handleClick('minute', 1)">
        {{ getScrollOption('minute', 1) }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedHour: null,
      selectedMinute: null,
      touchStartPosition: null,
    };
  },
  mounted() {
    const now = new Date();
    this.selectedHour = now.getHours();
    this.selectedMinute = now.getMinutes();
  },
  methods: {
    handleClick(type, deltaMultiplier = 0) {
      if (type === 'hour') {
        this.selectedHour += deltaMultiplier;
        if (this.selectedHour < 0) {
          this.selectedHour = 23;
        } else if (this.selectedHour > 23) {
          this.selectedHour = 0;
        }
      } else if (type === 'minute') {
        this.selectedMinute += deltaMultiplier;
        if (this.selectedMinute < 0) {
          this.selectedMinute = 59;
        } else if (this.selectedMinute > 59) {
          this.selectedMinute = 0;
        }
      }
    },
    getScrollOption(type, deltaMultiplier) {
      if (this.selectedHour === null || this.selectedMinute === null) {
        return ''; // or return a placeholder value
      }

      let scrollHour = this.selectedHour;
      let scrollMinute = this.selectedMinute;

      if (type === 'hour') {
        scrollHour += deltaMultiplier;
        if (scrollHour < 0) {
          scrollHour = 23;
        } else if (scrollHour > 23) {
          scrollHour = 0;
        }
      } else if (type === 'minute') {
        scrollMinute += deltaMultiplier;
        if (scrollMinute < 0) {
          scrollMinute = 59;
        } else if (scrollMinute > 59) {
          scrollMinute = 0;
        }
      }

      const hours = scrollHour.toString().padStart(2, '0');
      const minutes = scrollMinute.toString().padStart(2, '0');

      return `${hours}:${minutes}`;
    },
    handleTouchStart(event) {
      this.touchStartPosition = event.changedTouches[0].clientY;
    },
    handleTouchMove(event) {
      event.preventDefault();
      const touchPosition = event.changedTouches[0].clientY;
      const delta = touchPosition - this.touchStartPosition;

      if (Math.abs(delta) >= 10) {
        const deltaMultiplier = Math.sign(delta);
        if (delta > 0) {
          this.handleClick('hour', deltaMultiplier);
        } else {
          this.handleClick('minute', deltaMultiplier);
        }
        this.touchStartPosition = touchPosition;
      }
    },
    handleTouchEnd() {
      this.emitTimestamp();
    },
    getFormattedTimestamp() {
      const now = new Date();
      let selectedDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), this.selectedHour, this.selectedMinute);
      if (selectedDate > now) {
        selectedDate.setDate(now.getDate() - 1);
      }

      const day = selectedDate.getDate().toString().padStart(2, '0');
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = selectedDate.getFullYear().toString().slice(2);
      const hours = selectedDate.getHours().toString().padStart(2, '0');
      const minutes = selectedDate.getMinutes().toString().padStart(2, '0');

      return `${hours}:${minutes} ${day}.${month}.${year}`;
    },
    emitTimestamp() {
      const formattedTimestamp = this.getFormattedTimestamp();
      this.$emit('timestamp-selected', formattedTimestamp);
    },
  },
  watch: {
    selectedHour() {
      this.emitTimestamp();
    },
    selectedMinute() {
      this.emitTimestamp();
    },
  },
};
</script>

<style>
.rotating-clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.scroll-options {
  display: flex;
  justify-content: center;
}

.scroll-option {
  font-size: 24px;
  cursor: pointer;
  letter-spacing: 6px;
}

.time-picker {
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
}

.picker-hour,
.picker-minute {
  width: 50px;
  text-align: center;
  cursor: pointer;
}
</style>
