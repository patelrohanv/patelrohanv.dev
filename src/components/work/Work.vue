<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "Work",
  computed: {
    values() {
      return this.$store.getters['work/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>