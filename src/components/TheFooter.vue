<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="v in values"
        :key="v.key"
        icon
        size="x-large"
        class="mx-2"
      >
        <v-icon size="24px">
          {{ v.icon }}
        </v-icon>
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Rohan Patel</strong>
      </v-col>
    </v-row>
  </v-container>
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