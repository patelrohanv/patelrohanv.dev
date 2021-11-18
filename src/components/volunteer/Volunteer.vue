<template>
  <div>
    <v-container>
      <v-row
        v-for="v in values"
        :key="v.key"
      >
        <v-col>
          <VolunteerCard 
            :company="v.company"
            :title="v.title"
            :start="v.start"
            :end="v.end"
            :details="v.details"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VolunteerCard from '@/components/volunteer/VolunteerCard.vue';

export default {
  name: "Work",
  components: {
    VolunteerCard
  },
  computed: {
    values() {
      return this.$store.getters['volunteer/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>