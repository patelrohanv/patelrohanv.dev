<template>
  <v-footer
      padless
      rounded
    >
      <v-card
        flat
        tile
        class="white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="v in values"
            :key="v.key"
            icon
            size="x-large"
            class="mx-2"
            @click="clicked(v.url)"
          >
            <v-icon size="24px">
              {{ v.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          <a href="https://github.com/patelrohanv/patelrohanv.dev">Feel free to Clone/Fork me!</a>
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Rohan Patel</strong>
        </v-card-text>
      </v-card>
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