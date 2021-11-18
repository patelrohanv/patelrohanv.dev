<template>
  <div>
  </div>
</template>

<script>

export default {
  name: "Education",
  computed: {
    values() {
      return this.$store.getters['education/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>