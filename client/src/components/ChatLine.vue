<template>
  <div class="caption pa-2">
    <div class="d-flex justify-space-between mb-1">
      <div class="font-weight-bold">{{ chatModel.qPerson }}</div>
      <div class="mr-3 text--secondary">{{ chatModel.qDate }}</div>
    </div>
    <p class="mt-2 mb-0" style="white-space:pre-wrap;">{{ chatModel.qText }}</p>
  </div>
</template>

<script>
export default {
  name: "ChatLine",
  props: {
    chatModel: Object,
  },
}
</script>

<style scoped>

</style>