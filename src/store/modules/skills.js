const actions = {};
const getters = {};
const mutations = {};
const state = () => ({
    languages: [],
    frameworks: [],
    libraries: [],
    tools: [],
    hobbies: []
});

export default {
    actions,
    getters,
    mutations,
    namespaced: true,
    state,
}