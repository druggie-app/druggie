<template>
  <div class="rotating-clock">
    <div class="scroll-options">
      <div class="scroll-option" @wheel="handleScroll($event, 'minute', -1)">
        {{ getScrollOption('minute', -1) }}
      </div>
    </div>
    <div class="time-picker">
      <div class="picker-hour" @wheel="handleScroll($event, 'hour')">
        {{ selectedHour }}
      </div>
      <span>:</span>
      <div class="picker-minute" @wheel="handleScroll($event, 'minute')">
        {{ selectedMinute }}
      </div>
    </div>
    <div class="scroll-options">
      <div class="scroll-option" @wheel="handleScroll($event, 'minute', 1)">
        {{ getScrollOption('minute', 1) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedHour: new Date().getHours(),
      selectedMinute: new Date().getMinutes(),
    };
  },
  methods: {
    handleScroll(event, type, deltaMultiplier = 0) {
      event.preventDefault();
      const delta = Math.sign(event.deltaY) * (deltaMultiplier === 0 ? 1 : deltaMultiplier);

      if (type === 'hour') {
        this.selectedHour += delta;
        if (this.selectedHour < 0) {
          this.selectedHour = 23;
        } else if (this.selectedHour > 23) {
          this.selectedHour = 0;
        }
      } else if (type === 'minute') {
        this.selectedMinute += delta;
        if (this.selectedMinute < 0) {
          this.selectedMinute = 59;
        } else if (this.selectedMinute > 59) {
          this.selectedMinute = 0;
        }
      }
    },
    getScrollOption(type, deltaMultiplier) {
      const now = new Date();
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

      let scrollDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), scrollHour, scrollMinute);
      if (scrollDate > now) {
        scrollDate.setDate(now.getDate() - 1);
      }

      const hours = scrollDate.getHours().toString().padStart(2, '0');
      const minutes = scrollDate.getMinutes().toString().padStart(2, '0');

      return `${hours}:${minutes}`;
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
    }
  }
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
