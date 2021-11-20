import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import socialMedia from '@/store/modules/socialMedia'
import socialMediaList from '@/data/socialMedia.json';

describe('socialMedia.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      socialMedia
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockSocialMedia = {
      "key": "github",
      "value": "Github",
      "handle": "patelrohanv",
      "url": "https://github.com/patelrohanv",
      "icon": "mdi-github"
    }
    await store.dispatch('socialMedia/setValues', socialMediaList)
    const result = store.getters['socialMedia/getValues']
    result.forEach(e => {
      Object.entries(mockSocialMedia).forEach(k => {
        expect(mockSocialMedia.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
