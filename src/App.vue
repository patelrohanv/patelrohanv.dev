<template>
  <v-app>
    <v-main>
    <TheHeader />

    <Skills />
    <Work />
    <Life />
    <Projects />
    <Volunteer />
    <Education />
      
    <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import Education from '@/components/education/Education.vue';
import Life from '@/components/life/Life.vue';
import Projects from '@/components/projects/Projects.vue';
import Skills from '@/components/skills/Skills.vue';
import Volunteer from '@/components/volunteer/Volunteer.vue';
import Work from '@/components/work/Work.vue';

import educationList from '@/data/education.json';
import lifeList from '@/data/life.json';
import projectsList from '@/data/projects.json';
import skillsList from '@/data/skills.json';
import socialMediaList from '@/data/socialMedia.json';
import volunteerList from '@/data/volunteer.json';
import workList from '@/data/work.json';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
    Education,
    Life,
    Projects,
    Skills,
    Volunteer,
    Work
  },
  async beforeCreate() {
    await this.$store.dispatch('education/setValues', educationList);
    await this.$store.dispatch('life/setValues', lifeList);
    await this.$store.dispatch('projects/setValues', projectsList);
    await this.$store.dispatch('skills/setValues', skillsList);
    await this.$store.dispatch('socialMedia/setValues', socialMediaList);
    await this.$store.dispatch('volunteer/setValues', volunteerList);
    await this.$store.dispatch('work/setValues', workList);
  },
}
</script>
