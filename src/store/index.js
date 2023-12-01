// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        country: 'INR',
        user: null,
        token: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setCountry(state, country) {
            state.country = country;
        },
        logout(state) {
            state.user = null;
        },
    },
    actions: {
        login({ commit }, user) {
            // Add authentication logic here (e.g., API call)
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('logout');
        },
    },
    modules: {},
});