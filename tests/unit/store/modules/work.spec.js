import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import work from '@/store/modules/work'
import workList from '@/data/work.json';

describe('work.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      work
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockWork = {
      "company": "mockCompany",
      "title": "mockTitle",
      "start": "mockStart",
      "end": "mockEnd",
      "details": []
    }
    await store.dispatch('work/setValues', workList)
    const result = store.getters['work/getValues']
    result.forEach(e => {
      Object.entries(mockWork).forEach(k => {
        expect(mockWork.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
