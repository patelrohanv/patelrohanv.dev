<template>
  <div>
    <v-btn
      class="ma-2"
      outlined
      large
      fab
      :link=linkedIn.url
    >
      <v-icon
        dark
        x-large
      >
        mdi-linkedin
      </v-icon>
    </v-btn>
    
    <v-btn
      class="ma-2"
      outlined
      large
      fab
      :link="github.url"
    >
      <v-icon
        dark
        x-large
      >
        mdi-github
      </v-icon>
    </v-btn>

    <v-btn
      class="ma-2"
      outlined
      large
      fab
      :link="resume.url"
    >
      <v-icon
        dark
        x-large
      >
        mdi-file-account
      </v-icon>
    </v-btn>

  </div>
</template>

<script>

export default {
  name: "TheFooter",
  components: { 

  },
  computed: {
    github() {
      return this.$store.getters['socialMedia/getGithub']
    },
    linkedIn() {
      return this.$store.getters['socialMedia/getLinkedIn']
    },
    resume() {
      return this.$store.getters['socialMedia/getResume']
    },
  },
}
</script>

<style lang="scss" scoped>

</style>