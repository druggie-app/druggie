<template>
    <div>
      <h2>Select Intake Method:</h2>
      <select v-model="selectedIntakeMethod">
        <option value="nose">Nose</option>
        <option value="mouth">Mouth</option>
        <option value="other">Other</option>
      </select>
  
      <div v-if="selectedIntakeMethod === 'other'">
        <label for="otherMethod">Other Method:</label>
        <input type="text" id="otherMethod" v-model="otherMethod" />
      </div>
  
      <button @click="nextPage">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChooseIntakeMethod",
    data() {
      return {
        selectedIntakeMethod: 'nose',
        otherMethod: ''
      };
    },
    methods: {
      nextPage() {
        this.$emit('input-selected', {
          intakeMethod: this.selectedIntakeMethod === 'other' ? this.otherMethod : this.selectedIntakeMethod
        });
      }
    }
  };
  </script>
  