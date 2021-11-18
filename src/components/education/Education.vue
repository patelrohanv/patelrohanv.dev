<template>
  <div>
    <v-container>
      <v-row
        v-for="v in values"
        :key="v.key"
      >
        <v-col>
          <v-card>
            {{ v.key }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Education",
  computed: {
    values() {
      return this.$store.getters['education/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>