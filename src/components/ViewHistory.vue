<!-- <template>
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
--->

<template>
  <div>
    <h2>Log Entry:</h2>
    <p><strong>Intake Method:</strong> {{ logEntry.intakeMethod }}</p>
    <p><strong>Substance:</strong> {{ logEntry.substance }}</p>
    <p><strong>Amount:</strong> {{ logEntry.amount }}</p>
    <p><strong>Timestamp:</strong> {{ logEntry.timestamp }}</p>
  </div>
</template>

<script>
export default {
  props: {
    logEntry: {
      type: Object,
      required: true
    }
  }
};
</script>
  