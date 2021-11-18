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
                <v-card-title>{{ v.eventTitle }} </v-card-title>
                <v-card-subtitle>{{ v.date }}</v-card-subtitle>
              </v-card-header-text>
            </v-card-header>
            <v-card-text>{{ v.details }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Life",
  computed: {
    values() {
      return this.$store.getters['life/getValues']
    },
  } 
}
</script>

<style lang="scss" scoped>

</style>