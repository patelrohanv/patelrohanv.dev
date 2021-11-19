<template>
  <v-container>
    <Skills />
    <Work />
    <Projects />
    <Education />
    <Volunteer />
  </v-container>
</template>

<script>
import Education from '@/components/education/Education.vue';
import Projects from '@/components/projects/Projects.vue';
import Skills from '@/components/skills/Skills.vue';
import Volunteer from '@/components/volunteer/Volunteer.vue';
import Work from '@/components/work/Work.vue';

export default {
  name: 'App',

  components: {
    Education,
    Projects,
    Skills,
    Volunteer,
    Work
  },
  computed: {

  } 
}
</script>
