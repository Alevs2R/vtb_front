import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
      email: '',
      user_id: ''
});

const state = initialState();
const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getters = {

};

const actions = {
  login({getters, commit}, data) {

    return axios
        .post(`${URL}rooms`,data, axiosConfig)
        .then(({data}) => {
          commit("setProfile", data)
          return data
        })
        .catch((error) => {
          throw error
        })
  },

  getRooms () {
      return axios
          .post(`${URL}login`,data, axiosConfig)
          .then(({data}) => {
              commit("setProfile", data)
              return data
          })
          .catch((error) => {
              throw error
          })
  }
};

const mutations = {
  setProfile (state, data) {
      state.user_id = data
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
