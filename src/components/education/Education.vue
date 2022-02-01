<template>
  <v-container>
    <v-row>
      <v-col
        v-for="v in values"
        :key="v.key"
        sm="12"
        md="6"
      >
        <EducationCard 
          :school="v.school"
          :degrees="v.degrees"
          :majors="v.majors"
          :minors="v.minors"
          :started="v.started"
          :graduated="v.graduated"
          :courses="v.courses"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EducationCard from '@/components/education/EducationCard.vue';

export default {
  name: "Education",
  components: {
    EducationCard
  },
  computed: {
    values() {
      return this.$store.getters['education/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>