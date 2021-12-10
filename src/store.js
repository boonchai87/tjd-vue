import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import $ from 'jquery';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    title: "My Custom Title",
    links: ["http://google.com", "http://coursetro.com", "http://youtube.com"],
    authorized : "form global",
    authenticatedUser : null,
            restUrl : "https://thaijavadev-node-backend.herokuapp.com/",
            //restUrl : "http://localhost:5000/",
            loading: false,
  },
  mutations: {// method for change state
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {// for do ansynchnous
    increment2 ({ commit }) {
      commit('increment')
    },
    async actionA ({ commit }) {
      const response = await Axios.get("http://www.google.com");
      commit('data', response.data );
    },
    /*
    async actionB ({ dispatch, commit }) {
      await dispatch('actionA') // wait for `actionA` to finish
      commit('gotOtherData', await getOtherData())
    }*/
    gotoPage(page){
      $("#collapsibleNavbar").removeClass("show");
      this.$router.push(page);
    },
  },
  getters: {// for methods get property with logic
    countLinks(state) {
      return state.links.length;
    }
  }
});