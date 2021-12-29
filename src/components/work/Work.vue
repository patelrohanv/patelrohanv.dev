<template>
  <v-container>
    <v-row>
      <v-col
        v-for="v in values"
        :key="v.key"
      >
        <WorkCard 
          :company="v.company"
          :title="v.title"
          :start="v.start"
          :end="v.end"
          :details="v.details"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WorkCard from '@/components/work/WorkCard.vue';

export default {
  name: "Work",
  components: {
    WorkCard
  },
  computed: {
    values() {
      return this.$store.getters['work/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>