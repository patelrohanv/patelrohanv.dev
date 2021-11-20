import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper; 
  
  const createWrapper = (props = {}) => shallowMount(App, {
    props,
    global: { }
  }) 

  it('name is computed properly', async () => {
  })

  it('location is computed properly', () => {

  })
})
