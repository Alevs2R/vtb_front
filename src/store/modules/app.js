import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
}/api/`;

const initialState = () => ({
  email: '',
  user_id: '',
  access_token: '',
  events: [],
});

const state = initialState();
const axiosSimpleConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getters = {
  authHeader({ access_token }) {
    return {
      Authorization: `Token ${access_token}`
    };
  },

  authPostHeader({ access_token }) {
    return {
      "Content-Type": "application/json",
      Authorization: `Token ${access_token}`
    };
  },
};

const actions = {
  login({getters, commit}, data) {

    commit("setProfile", data)
    return axios
      .post(`${URL}login`, data, axiosSimpleConfig)
      .then(({data}) => {
        commit("setUser", data)
        return data
      })
      .catch((error) => {
        throw error
      })
  },

  getRooms({getters, commit}, data) {

    const axiosConfig = {
      headers: getters["authPostHeader"]
    };

    return axios
      .post(`${URL}rooms`, data, axiosConfig)
      .then(({data}) => {
        commit("setEvents", data)
        return data
      })
      .catch((error) => {
        throw error
      })
  }
};

const mutations = {
  setProfile(state, data) {
    state.email = data.email
  },

  setEvents(state, data) {
    state.events = data
  },
  setUser(state, data) {
      state.user_id = data.user_id
      state.access_token = data.token
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
