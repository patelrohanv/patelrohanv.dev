<template>
  <v-app>
    <v-theme-provider theme="dark" with-background class="pa-10">
      <TheHeader 
        :name="name"
        :location="location"
      />
      <v-main>
      <!-- <v-container>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </v-container> -->
        <router-view></router-view>
      </v-main>
      <TheFooter />
    </v-theme-provider>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import educationList from '@/data/education.json';
import lifeList from '@/data/life.json';
import projectsList from '@/data/projects.json';
import skillsList from '@/data/skills.json';
import socialMediaList from '@/data/socialMedia.json';
import volunteerList from '@/data/volunteer.json';
import workList from '@/data/work.json';

import personalJson from '@/data/personal.json';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
  },
  async beforeCreate() {

    // todo: Could probably avoid this entire loading process by using locales
    await this.$store.dispatch('education/setValues', educationList);
    await this.$store.dispatch('life/setValues', lifeList);
    await this.$store.dispatch('projects/setValues', projectsList);
    await this.$store.dispatch('personal/setName', personalJson.name);
    await this.$store.dispatch('personal/setLocation', personalJson.location);
    await this.$store.dispatch('personal/setDescription', personalJson.description);
    await this.$store.dispatch('skills/setValues', skillsList);
    await this.$store.dispatch('socialMedia/setValues', socialMediaList);
    await this.$store.dispatch('volunteer/setValues', volunteerList);
    await this.$store.dispatch('work/setValues', workList);
  },
  computed: {
    name() {
      return this.$store.getters['personal/getName']
    },
    location() {
      return this.$store.getters['personal/getLocation']
    },
  } 
}
</script>
