import axios from 'axios'

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos( { commit } ) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('setTodos', response.data) 
        }
        catch(e) {
            console.error(e)
        } 
    },
    async addTodo( { commit }, title ) {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
            commit('newTodo', response.data)  
        }
        catch(e) {
            console.error(e)
        }
        
    },
    async deleteTodo( { commit }, id ) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('deleteTodo', id)
        }
        catch(e) {
            console.error(e)
        }   
    },
    async filterTodos( { commit }, e ) {
        try {
            //get selected number
            const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
            console.log(limit)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            commit('setTodos', response.data)
        }
        catch(e) {
            console.error(e)
        }
    },
    async updateTodo( { commit }, updTodo ) {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
            console.log(response.data)
            commit('updateTodo', response.data)
        }
        catch(e) {
            console.error(e)
        }
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if(index !== -1) {
            state.todos.splice(index, 1, updTodo)
        }
    }
}

export default {
    state,
    getters,
    actions, 
    mutations
}