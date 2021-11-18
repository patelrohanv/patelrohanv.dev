<template>
  <div>
    <v-container>
      <v-row
        v-for="v in values"
        :key="v.key"
      >
        <v-col>
          <v-card>
            {{ v.title }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Work",
  computed: {
    values() {
      return this.$store.getters['work/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>