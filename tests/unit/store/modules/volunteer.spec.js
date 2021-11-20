import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import volunteer from '@/store/modules/volunteer'
import volunteerList from '@/data/volunteer.json';

describe('volunteer.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      volunteer
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockVolunteer = {
      "organization": "All World Gayatri Pariwar",
      "title": "Director (Austin), Coordinator (North Americaa)",
      "start": "August 2009",
      "end": "",
      "details": [
        "Run several weekly reading calls on spiritual and philosophical texts",
        "Organize quarterly virtual workshops on the intersection of modern issues and spirituality",
        "Manage communication with local chapters across the US and Canada",
        "Manage distribution of the organization's podcast"
      ]
    }
    await store.dispatch('volunteer/setValues', volunteerList)
    const result = store.getters['volunteer/getValues']
    result.forEach(e => {
      Object.entries(mockVolunteer).forEach(k => {
        expect(mockVolunteer.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
