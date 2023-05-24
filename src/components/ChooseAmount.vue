<template>
  <div>
    <h2>Enter Amount:</h2>
    <input type="text" v-model="amount" />

    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  name: 'ChooseAmount',
  props: {
    intakeMethod: {
      type: String,
      required: true
    },
    substance: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      amount: ''
    };
  },
  methods: {
    nextPage() {
      this.$emit('input-selected', {
        intakeMethod: this.intakeMethod,
        substance: this.substance,
        amount: this.amount
      });
    }
  }
};
</script>
