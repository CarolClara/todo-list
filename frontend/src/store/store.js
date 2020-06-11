import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        tasks: []
    },

    getters: {
        tasks: state => state.tasks
    },

    mutations: {
        GET_TASKS (state, tasks) {
            state.tasks = tasks
        }
    },

    actions: {
        getTasks({commit}) {
            axios
                .get('http://localhost:8001/todolist/tasks/')
                .then(response => Promise.resolve(response.data))
                .then(tasks => commit('GET_TASKS', tasks))
                .catch(error => Promise.reject(error))
        }
    }
});