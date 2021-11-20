import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import education from '@/store/modules/education'
import educationList from '@/data/education.json';

describe('education.js', () => {
  let store; 
  
  const createVuexStore = () =>
  createStore({
    modules: {
      education
    }
  })

  it('values is set correctly', async () => {
    store = createVuexStore()
    const mockEducation = {
      "key": "mockKey",
      "school": "mockSchool",
      "degrees": ["mockDegrees"],
      "majors": ["mockMajors"],
      "minors": ["mockMinors"],
      "started": "mockStarted",
      "graduated": "mockGraduated",
      "courses": ["mockCourses"]
    }
    await store.dispatch('education/setValues', educationList)
    const result = store.getters['education/getValues']
    result.forEach(e => {
      Object.entries(mockEducation).forEach(k => {
        expect(mockEducation.hasOwnProperty(k[0])).toBe(true)
      })
    });
  })
})
