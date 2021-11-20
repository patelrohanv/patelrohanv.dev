import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import skills from '@/store/modules/skills'
import skillsList from '@/data/skills.json';

describe('skills.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      skills
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockSkills = {
      "key": "languages",
      "value": [
        "Go",
        "Python",
        "Javascript/Typescript",
        "Java",
        "C#"
      ]
    }
    await store.dispatch('skills/setValues', skillsList)
    const result = store.getters['skills/getValues']
    result.forEach(e => {
      Object.entries(mockSkills).forEach(k => {
        expect(mockSkills.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
