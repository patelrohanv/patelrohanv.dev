<template>
  <v-app>
    <v-main>
    <TheHeader 
      :name="name"
      :location="location"
    />

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

import personalJson from '@/data/personal.json';

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
