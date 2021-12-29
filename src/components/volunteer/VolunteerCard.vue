<template>
  <v-card
    outlined
    shaped
  >
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{ organization }} </v-card-title>
        <v-card-subtitle>{{ title }}</v-card-subtitle>
        <v-card-subtitle>{{ start }}</v-card-subtitle>
        <v-card-subtitle>{{ end }}</v-card-subtitle>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
      <v-list
        density="compact"
      >
        <v-list-item
          v-for="d in details"
          :key="d"
        >
          <v-list-item-content>
            <v-list-item-title v-text="d"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
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