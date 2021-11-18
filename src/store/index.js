import { createStore } from 'vuex'
import education from '@/store/modules/education'
import life from '@/store/modules/life'
import projects from '@/store/modules/projects'
import skills from '@/store/modules/skills'
import socialMedia from '@/store/modules/socialMedia'
import volunteer from '@/store/modules/volunteer'
import work from '@/store/modules/work'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    education,
    life,
    projects,
    skills,
    socialMedia,
    volunteer,
    work,
  }
})
