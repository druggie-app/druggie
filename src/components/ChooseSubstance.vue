<template>
  <div>
    <h2>Select Substance:</h2>
    <select v-model="selectedSubstance">
      <!-- <option v-for="substance in substances" :value="substance">{{ substance }}</option> -->
    </select>

    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  name: 'ChooseSubstance',
  props: {
    intakeMethod: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedSubstance: ''
    };
  },
  computed: {
    substances() {
      if (this.intakeMethod === 'nose') {
        return ['speed', 'ketamine'];
      } else if (this.intakeMethod === 'mouth') {
        return ['weed', 'mdma', 'alcohol'];
      } else {
        return ['lsd'];
      }
    }
  },
  methods: {
    nextPage() {
      this.$emit('input-selected', {
        intakeMethod: this.intakeMethod,
        substance: this.selectedSubstance
      });
    }
  }
};
</script>
