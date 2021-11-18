<template>
  <v-divider></v-divider>
  <v-card height="100%">
    <v-footer>
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text>
          <v-btn
            v-for="v in values"
            :key="v.icon"
            class="mx-4"
            icon
            size="x-large"
          >
            <v-icon size="24px">
              {{ v.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>

export default {
  name: "TheFooter",
  components: { 

  },
  computed: {
    values() {
      return this.$store.getters['socialMedia/getValues']
    },
  }
}
</script>

<style lang="scss" scoped>

</style>