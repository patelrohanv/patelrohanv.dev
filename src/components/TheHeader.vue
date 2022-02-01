<template>
  <v-card
  width="100%"
  >
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: "TheHeader",
  props: {
    name: VueTypes.string.def(''),
    location: VueTypes.string.def(''),
  },
  computed: {
    description() {
      const storeDescription = this.$store.getters['personal/getDescription']
      return storeDescription.replace(':location', this.location)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>