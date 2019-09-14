import axios from "axios";
import localStorage from "../../js/localStorage";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
}/api/`;

const initialState = () => ({
  user: {
    email: '',
    user_id: '',
    first_name: '',
    second_name: '',
    access_token: ''
  },
  events: []
});

const state = initialState();
const axiosSimpleConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getters = {
  authHeader({ user }) {
    return {
      Authorization: `Token ${user.access_token}`
    };
  },

  authPostHeader({ user }) {

    return {
      "Content-Type": "application/json",
      Authorization: `Token ${user.access_token}`
    };
  },
};

const actions = {
  autorization ({commit}) {
    const data = localStorage.getStorage('app')
    commit('setUser', data)
  },

  login({getters, commit}, data) {
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
  setEvents(state, data) {
    state.events = data
  },

  setUser(state, data) {
      console.log(data)
      state.user = data
      localStorage.setStorage( state.user, 'app')
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
