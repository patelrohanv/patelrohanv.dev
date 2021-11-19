<template>
  <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            {{ name }}
          </h1>
          <h4 class="subheading">
            {{ description }}
          </h4>
        </v-col>
      </v-row>
  </v-container>
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