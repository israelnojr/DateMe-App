import Vue from "vue-native-core";
import Vuex from 'vuex';
import Auth from './modules/auth'
import Contacts from './modules/contacts'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
     
    },
    mutations: {
      
    },
    actions: {
      
    },
    getters: {},
    
    modules: {
        Auth,
        Contacts
    }
});
export default store;