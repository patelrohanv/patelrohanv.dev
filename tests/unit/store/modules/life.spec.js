import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import life from '@/store/modules/life'
import lifeList from '@/data/life.json';

describe('life.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      life
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockEducation = {
      "key": "mockKey",
      "eventTitle": "mockEventTitle",
      "date": "mockDate",
      "details": "mockDetails",
      "url": "mockUrl"
    }
    await store.dispatch('life/setValues', lifeList)
    const result = store.getters['life/getValues']
    result.forEach(e => {
      Object.entries(mockEducation).forEach(k => {
        expect(mockEducation.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
