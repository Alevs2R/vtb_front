import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({

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

}


const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
};
