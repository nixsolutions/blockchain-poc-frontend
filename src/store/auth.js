import authApi from '../api/auth'
import authHelper from './../helpers/auth'
import router from './../router'
import axios from "../api/axios";

const initial = () => ({
    authorized: authHelper.isAuthorized(),
    error: null,
    token: authHelper.getToken() || null,
    role: authHelper.getRole() || null,
    enrollmentId: authHelper.getEnrollmentId() || null,
});

const state = initial();

const mutations = {
    authorize (state, token) {
        state.authorized = true;
        state.token = "Bearer " + token;
        state.error = null
    },
    setRole (state, role) {
        state.role = role;
    },

    setEnrollmentId (state, enrollmentId) {
        state.enrollmentId = enrollmentId;
    },
    unauthorize (state) {
        state.authorized = false;
        state.token = null;
        authHelper.unauthorize();
    },
    resetRole(state) {
        state.role = null;
        authHelper.removeRole();
    },
    resetEnrollmentId(state) {
        state.enrollmentId = null;
        authHelper.removeEnrollmentId();
    },
    setError (state, error) {
        state.error = error
    },
    reset (state) {
        Object.assign(state, initial())
    }
};

const getters = {};

const actions = {
    async signin (context, { credentials, redirect = null }) {
        try {
            const response = await authApi.login(credentials);
            if(typeof response !== 'undefined') {
                context.commit('authorize', response.data.token);
                context.commit('setRole', response.data.role);
                context.commit('setEnrollmentId', response.data.enrollmentId);
                authHelper.authorize(context.state.token);
                authHelper.setRole(context.state.role);
                authHelper.setEnrollmentId(context.state.enrollmentId);
                axios.defaults.headers['Authorization'] = context.state.token;
                router.push(redirect || {name: 'dashboard'})
            }
        } catch (error) {
            if(typeof response !== 'undefined') {
                context.commit('setError', error.response.data.message)
            }
        }
    },
    signOut (context) {
        context.dispatch('resetState');
        context.dispatch('resetRole');
        context.dispatch('resetEnrollmentId');
        router.push({ name: 'login' })
    },
    resetState (context) {
        context.commit('unauthorize');
        context.dispatch('resetAllState', {}, { root: true })
    },
    resetRole(context) {
        context.commit('resetRole')
    },
    resetEnrollmentId(context) {
        context.commit('resetEnrollmentId')
    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}