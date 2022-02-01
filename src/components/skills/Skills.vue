<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="v in values"
          :key="v.key"
          sm="12"
          md="6"
          lg="3"
        >
          <v-card
            outlined
            shaped
            height="100%"
          >
            <v-card-header>
              <v-card-header-text>
                <v-card-title>{{ v.key }} </v-card-title>
              </v-card-header-text>
            </v-card-header>
            <v-card-text>
              <v-list
              density="compact"
              >
                <v-list-item
                  v-for="val in v.value"
                  :key="val"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="val"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
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