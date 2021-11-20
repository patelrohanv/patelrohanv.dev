import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import projects from '@/store/modules/projects'
import projectsList from '@/data/projects.json';

describe('projects.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      projects
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockProjects = {
      "title": "patelrohanv.dev",
      "description": "Rohan Patel",
      "repo": "patelrohanv.dev",
      "link": "patelrohanv.dev"
    }
    await store.dispatch('projects/setValues', projectsList)
    const result = store.getters['projects/getValues']
    result.forEach(e => {
      Object.entries(mockProjects).forEach(k => {
        expect(mockProjects.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
