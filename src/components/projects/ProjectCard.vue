<template>
  <v-card
    outlined
    shaped
    height="100%"
  >
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{ title }} </v-card-title>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>{{ description }}</v-card-text>

    <v-card-actions>
      <v-btn>Repo</v-btn>
      <v-btn v-if="link">Link</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: "ProjectCard",
  props: {
    title: VueTypes.string.def(''),
    description: VueTypes.string.def(''),
    repo: VueTypes.string.def(''),
    link: VueTypes.string.def('')
  }
}
</script>

<style lang="scss" scoped>

</style>