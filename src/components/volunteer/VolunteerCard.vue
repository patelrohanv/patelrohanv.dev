<template>
  <v-card
    outlined
    shaped
  >
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{ title }} </v-card-title>
        <v-card-subtitle>{{ organization }}</v-card-subtitle>
        <v-card-subtitle>{{ start }}</v-card-subtitle>
        <v-card-subtitle>{{ end }}</v-card-subtitle>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>{{ details }}</v-card-text>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: "VolunteerCard",
  props: {
    organization: VueTypes.string.def(''),
    title: VueTypes.string.def(''),
    start: VueTypes.string.def(''),
    end: VueTypes.string.def(''),
    details: VueTypes.array.def([])
  }
}
</script>

<style lang="scss" scoped>

</style>