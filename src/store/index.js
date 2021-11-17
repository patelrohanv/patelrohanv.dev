import { createStore } from 'vuex'
import education from '@/store/modules/education'
import projects from '@/store/modules/projects'
import skills from '@/store/modules/skills'
import socialMedia from '@/store/modules/socialMedia'
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
    projects,
    skills,
    socialMedia,
    work
  }
})
