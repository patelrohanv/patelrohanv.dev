<template>
  <v-container>
    <v-row>
      <v-col
        v-for="v in values"
        :key="v.key"
        sm="12"
        md="6"
      >
        <ProjectCard 
          :title="v.title"
          :description="v.description"
          :repo="v.repo"
          :link="v.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/projects/ProjectCard.vue';

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  computed: {
    values() {
      return this.$store.getters['projects/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>