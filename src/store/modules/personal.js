const actions = {
  setName({ commit }, name) {
      commit('setName', name);
  },
  setLocation({ commit }, location) {
    commit('setLocation', location);
  },
  setDescription({ commit }, description) {
    commit('setDescription', description);
  }
};
const getters = {
  getName: state => {
      return state.name;
  },
  getLocation: state => {
    return state.location;
  },
  getDescription: state => {
    return state.description;
  }
};
const mutations = {
  setName(state, name) {
      state.name = name;
  },
  setLocation(state, location) {
    state.location = location;
  },
  setDescription(state, description) {
    state.description = description;
  }
};
const state = () => ({
  name: "",
  location: "",
  description: "",
});

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
}