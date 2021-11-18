const actions = {
    setGithub({ commit }, github) {
        commit('setGithub', github);
    },
    setLinkedIn({ commit }, linkedIn) {
        commit('setLinkedIn', linkedIn);
    },
    setResume({ commit }, resume) {
        commit('setResume', resume);
    }
};
const getters = {
    getState: state => {
        return state
    },
    getGithub: state => {
        return state.github;
    },
    getLinkedIn: state => {
        return state.linkedIn;
    },
    getResume: state => {
        return state.resume;
    }
};
const mutations = {
    setGithub(state, github) {
        state.github = github;
    },
    setLinkedIn(state, linkedIn) {
        state.linkedIn = linkedIn;
    },
    setResume(state, resume) {
        state.resume = resume;
    }
};
const state = () => ({
    github: {},
    linkedIn: {},
    resume: {}
});

export default {
    actions,
    getters,
    mutations,
    namespaced: true,
    state,
}