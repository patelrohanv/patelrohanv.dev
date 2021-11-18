const actions = {
    setLanguages({ commit }, languages) {
        commit('setLanguages', languages);
    },
    setFrameworks({ commit }, frameworks) {
        commit('setFrameworks', frameworks);
    },
    setLibraries({ commit }, libraries) {
        commit('setLibraries', libraries);
    },
    setTools({ commit }, tools) {
        commit('setTools', tools);
    },
    setHobbies({ commit }, hobbies) {
        commit('setHobbies', hobbies);
    }
};
const getters = {
    getState: state => {
        return state
    },
    getLanguages: state => {
        return state.languages;
    },
    getFrameworks: state => {
        return state.frameworks;
    },
    getLibraries: state => {
        return state.libraries;
    },
    getTools: state => {
        return state.tools;
    },
    getHobbies: state => {
        return state.hobbies;
    }
};
const mutations = {
    setLanguages(state, languages) {
        state.languages = languages;
    },
    setFrameworks(state, frameworks) {
        state.frameworks = frameworks;
    },
    setLibraries(state, libraries) {
        state.libraries = libraries;
    },
    setTools(state, tools) {
        state.tools = tools;
    },
    setHobbies(state, hobbies) {
        state.hobbies = hobbies;
    }
};
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