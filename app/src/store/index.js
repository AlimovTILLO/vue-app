import Vue from 'vue'
import Vuex from 'vuex'
import { Countries } from '../api/countries'
import {
  SET_COUNTRIES
} from './mutation-types.js'

Vue.use(Vuex)

const state = {
  countries: []
}

const getters = {
  countries: state => state.countries
}

const mutations = {
  [SET_COUNTRIES] (state, { countries }) {
    state.countries = countries.items
  }
}

const actions = {
  getCountries ({ commit }) {
    Countries.list().then(countries => {
      commit(SET_COUNTRIES, { countries })
    })
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
