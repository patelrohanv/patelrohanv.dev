<template>
  <v-card
    outlined
    shaped
  >
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{ school }} </v-card-title>
        <v-card-subtitle>{{ degrees[0] }}</v-card-subtitle>
        <v-card-subtitle>{{ majors[0] }}</v-card-subtitle>
        <v-card-subtitle>Started: {{ started }}</v-card-subtitle>
        <v-card-subtitle>Finished: {{ graduated }}</v-card-subtitle>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>{{ courses }}</v-card-text>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: "EducationCard",
  props: {
    school: VueTypes.string.def(''),
    degrees: VueTypes.array.def([]),
    majors: VueTypes.array.def([]),
    minors: VueTypes.array.def([]),
    started: VueTypes.string.def(''),
    graduated: VueTypes.string.def(''),
    courses: VueTypes.array.def([])
  }
}
</script>

<style lang="scss" scoped>

</style>