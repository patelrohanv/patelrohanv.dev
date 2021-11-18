<template>
  <div>
    <v-container>
      <v-row
        v-for="v in values"
        :key="v.key"
      >
        <v-col>
          <v-card>
            {{ v.value }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Skills",
  computed: {
    values() {
      return this.$store.getters['skills/getValues']
    },
  } 
}
</script>

<style lang="scss" scoped>

</style>