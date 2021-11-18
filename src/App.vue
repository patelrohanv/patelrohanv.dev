<template>
  <v-app>
    <v-main>
    <TheHeader />

    <Skills />
    <Work />
    <Projects />
    <Education />
      
    <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import Education from '@/components/education/Education.vue';
import Projects from '@/components/projects/Projects.vue';
import Skills from '@/components/skills/Skills.vue';
import Work from '@/components/work/Work.vue';

import educationList from '@/data/education.json';
import projectsList from '@/data/projects.json';
import skillsJSON from '@/data/skills.json';
import socialMediaJSON from '@/data/socialMedia.json';
import workList from '@/data/work.json';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
    Education,
    Projects,
    Skills,
    Work
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
}
</script>
