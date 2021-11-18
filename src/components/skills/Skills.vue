<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  computed: {
    languages() {
      return this.$store.getters['skills/getLanguages']
    },
    frameworks() {
      return this.$store.getters['skills/getFrameworks']
    },
    libraries() {
      return this.$store.getters['skills/getLibraries']
    },
    tools() {
      return this.$store.getters['skills/getTools']
    },
    hobbies() {
      return this.$store.getters['skills/getHobbies']
    },
  }  
}
</script>

<style lang="scss" scoped>

</style>