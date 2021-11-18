<template>
    <header>
      <v-parallax 
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="text-h4 font-weight-thin mb-4">
              Rohan Patel
            </h1>
            <h4 class="subheading">
              Build your application today!
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style lang="scss" scoped>

</style>