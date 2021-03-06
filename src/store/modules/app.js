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
  events: [],
  room: {},
  isDesktop: true,
  mode: 'active',
  codeSent: false,
  phone: '',
  socket: ''
});

const state = initialState();
const axiosSimpleConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getters = {
  authHeader({user}) {
    return {
      Authorization: `Token ${user.access_token}`
    };
  },

  authPostHeader({user}) {

    return {
      "Content-Type": "application/json",
      Authorization: `Token ${user.access_token}`
    };
  },

  pastEvents({events}) {
    return events.filter((item) => !item.actual)
  },

  activeEvents({events}) {
    return events.filter((item) => item.actual)
  }

};

const actions = {
  autorization({commit}) {
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

  sendCode({getters, commit}, data) {
    return axios
      .post(`${URL}register`, data, axiosSimpleConfig)
      .then(({data}) => {
        commit("setCodeSent", true);
        return data
      })
      .catch((error) => {
        throw error
      })
  },

  confirmRegister({getters, commit}, data) {
    return axios
      .post(`${URL}confirm`, data, axiosSimpleConfig)
      .then(({data}) => {
        commit("setUser", data);
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
        commit("setEvents", data);
        return data
      })
      .catch((error) => {
        throw error
      })
  },
  getRoom({getters, commit}, data) {

    const axiosConfig = {
      headers: getters["authPostHeader"]
    };

    return axios
      .get(`${URL}room/${data.id}`, axiosConfig)
      .then(({data}) => {
        commit("setRoom", data)
        return data
      })
      .catch((error) => {
        throw error
      })
  },

  getUsers({getters},) {

    const axiosConfig = {
      headers: getters["authPostHeader"]
    };

    return axios
      .get(`${URL}users`, axiosConfig)
      .then(({data}) => {
        return data
      })
      .catch((error) => {
        throw error
      })
  },

  SOCKET_VOTES({getters, commit}, {data}) {
    commit("setAnswers", data)
  },

  savePolls({getters, commit}, data) {
    const axiosConfig = {
      headers: getters["authPostHeader"]
    };
    return axios
      .post(`${URL}room/save`, data, axiosConfig)
      .then(({data}) => {
        return data
      })
      .catch((error) => {
        throw error
      })
  },

  uploadFiles({getters, commit}, materials){

    const axiosConfig = {
      headers: getters["authPostHeader"]
    };

    return axios
      .post(`${URL}upload`, materials, axiosConfig)
      .then(({ data }) => {

      })
  }

};

const mutations = {
  setEvents(state, data) {
    state.events = data
  },

  setUser(state, data) {
    state.user = data
    localStorage.setStorage(state.user, 'app')
  },

  setRoom(state, data) {
    state.room = data
  },

  isDesktop(state) {
    state.isDesktop = window.innerWidth >= 768
  },

  setMode(state, value) {
    state.mode = value
  },

  setCodeSent(state, data) {
    // console.log('code sent '+data);
    state.codeSent = data;
  },

  setPhone(state, data) {
    state.phone = data;
  },
  setSocket(state, value) {
    state.socket = value
  },

  setAnswers(state, value) {
    state.room.votings = value.votings
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
