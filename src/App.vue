<template>
  <v-app>
    <v-main>
    <TheHeader />
    <!-- <HelloWorld /> -->
    <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import educationList from '@/data/education.json';
import projectsList from '@/data/projects.json';
import skillsJSON from '@/data/skills.json';
import socialMediaJSON from '@/data/socialMedia.json';
import workList from '@/data/work.json';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  },
  async beforeCreate() {
    await this.$store.dispatch('education/setValues', educationList);

    await this.$store.dispatch('projects/setValues', projectsList);

    await this.$store.dispatch('skills/setLanguages', skillsJSON.languages);
    await this.$store.dispatch('skills/setFrameworks', skillsJSON.frameworks);
    await this.$store.dispatch('skills/setLibraries', skillsJSON.libraries);
    await this.$store.dispatch('skills/setTools', skillsJSON.tools);
    await this.$store.dispatch('skills/setHobbies', skillsJSON.hobbies);

    await this.$store.dispatch('socialMedia/setGithub', socialMediaJSON.github);
    await this.$store.dispatch('socialMedia/setLinkedIn', socialMediaJSON.linkedIn);
    await this.$store.dispatch('socialMedia/setResume', socialMediaJSON.resume);

    await this.$store.dispatch('work/setValues', workList);

  },
  computed: {
    education() {
      return this.$store.getters['education/getValues']
    },
    projects() {
      return this.$store.getters['projects/getValues']
    },
    skills() {
      return this.$store.getters['skills/getValues']
    },
    socialMedia() {
      return this.$store.getters['socialMedia/getState']
    },
    work() {
      return this.$store.getters['work/getValues']
    },
  },
  data: () => ({
    //
  }),
}
</script>
