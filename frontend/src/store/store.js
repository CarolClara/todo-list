import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        tasks: [],
        message: ''
    },

    getters: {
        tasks: state => state.tasks,
        msg: state => state.message
    },

    mutations: {
        LIST_TASKS (state, tasks) {
            state.tasks = tasks
        },
        SAVE_TASK_CHANGES (state) {
            state.message = 'Tarefa alterada com sucesso.'
        },
        CREATE_TASK (state) {
            state.message = 'Tarefa criada com sucesso.'
        },
        REMOVE_TASK (state) {
            state.message = 'Tarefa removida com sucesso'
        }
    },

    actions: {
        getTasks({ commit }) {
            axios
                .get('http://localhost:8001/todolist/tasks/')
                .then(response => Promise.resolve(response.data))
                .then(tasks => commit('LIST_TASKS', tasks))
                .catch(error => Promise.reject(error))
        },
        saveChanges({ commit }, payload) {
            axios
                .put(`http://localhost:8001/todolist/tasks/${payload.id}/`, payload)
                .then(response => Promise.resolve(response.data))
                .then(commit('SAVE_TASK_CHANGES'))
                .catch(error => Promise.reject(error))
        },
        createTask({ commit }, newTask) {
            axios
                .post('http://localhost:8001/todolist/tasks/', newTask)
                .then(response => Promise.resolve(response.data))
                .then(commit('CREATE_TASK'))
                .catch(error => Promise.reject(error))
        },
        removeTask({commit}, payload) {
            axios
                .delete(`http://localhost:8001/todolist/tasks/${payload.id}/`, )
                .then(response => Promise.resolve(response.data))
                .then(commit('REMOVE_TASK'))
                .catch(error => Promise.reject(error))
        }
    }
});