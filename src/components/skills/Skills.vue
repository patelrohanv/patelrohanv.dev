<template>
  <div>
    <v-container>
      <v-row
        v-for="v in values"
        :key="v.key"
      >
        <v-col>
          <v-card
            outlined
            shaped
          >
            <v-card-header>
              <v-card-header-text>
                <v-card-title>{{ v.key }} </v-card-title>
              </v-card-header-text>
            </v-card-header>
            <v-card-text>{{ v.value }}</v-card-text>
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