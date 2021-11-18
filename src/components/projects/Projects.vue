<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    values() {
      return this.$store.getters['projects/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>