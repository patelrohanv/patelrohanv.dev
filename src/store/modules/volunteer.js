const actions = {
  setValues({ commit }, values) {
      commit('setValues', values);
  }
};
const getters = {
  getValues: state => {
      return state.values;
  }
};
const mutations = {
  setValues(state, values) {
      state.values = values;
  }
};
const state = () => ({
  values: []
});

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
}