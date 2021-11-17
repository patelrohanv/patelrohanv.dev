import Vue from 'vue'
import Vuex from 'vuex'

import education from '@/store/modules/education'
import projects from '@/store/modules/projects'
import skills from '@/store/modules/skills'
import socialMedia from '@/store/modules/socialMedia'
import work from '@/store/modules/work'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        education,
        projects,
        skills,
        socialMedia,
        work
    }
});
