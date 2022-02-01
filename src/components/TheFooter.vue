<template>
  <v-footer
    class="text-white text-center d-flex flex-column"
  >
    <div
      class="pa-md-4"
    >
      <v-btn
        v-for="v in values"
        :key="v.key"
        :icon="v.icon"
        size="x-large"
        class="mx-4 text-white"
        @click="clicked(v.url)"    
        variant="text"
      >
      </v-btn>
    </div>

    <div class="text-white pt-0">
      <a href="https://github.com/patelrohanv/patelrohanv.dev">Feel free to Clone/Fork me!</a>
    </div>

    <v-divider></v-divider>

    <div class="pa-md-4 text-white">
      {{ new Date().getFullYear() }} — <strong>Rohan Patel</strong>
    </div>
  </v-footer>
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
  },
  methods: {
    clicked (url) {
      window.open(url , "_blank");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>