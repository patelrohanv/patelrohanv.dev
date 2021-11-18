<template>
  <div>
    <v-container>
      <v-row
        v-for="v in values"
        :key="v.key"
      >
        <v-col>
          <v-card>
            {{ v.repo }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    values() {
      return this.$store.getters['projects/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>