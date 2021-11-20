import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import personal from '@/store/modules/personal'
import personalJson from '@/data/personal.json';

describe('personal.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      personal
    }
  })

  it('name is set correctly', async () => {
    store = createVuexStore()
    const mockValue = "Rohan Patel"

    await store.dispatch('personal/setName', mockValue)
    expect(store.getters['personal/getName']).toBe(mockValue)
  })

  it('location is set correctly', async () => {
    store = createVuexStore()
    const mockValue = "Austin, TX"

    await store.dispatch('personal/setLocation', mockValue)
    expect(store.getters['personal/getLocation']).toBe(mockValue)
  })

  it('description is set correctly', async () => {
    store = createVuexStore()
    const mockValue = "patelrohanv.dev"

    await store.dispatch('personal/setDescription', mockValue)
    expect(store.getters['personal/getDescription']).toBe(mockValue)
  })
})

describe('personal.json', () => {
  it('values are loaded correctly', async () => {
    const mockPersonal = {
        'name': 'Rohan Patel',
        'location': 'Austin, TX',
        'description': "patelrohanv.dev"
      }
    Object.entries(personalJson).forEach(k => {
      expect(mockPersonal.hasOwnProperty(k[0])).toBe(true)
    })
  })
})