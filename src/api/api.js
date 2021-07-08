import * as axios from 'axios';
import { dev } from '../env/env';



const instance = axios.create({
    withCredentials: true,
    baseURL: dev.baseURL,
    headers: { "API-KEY": dev.apiKey }

})

export const todoAPI = {
    getTodoLists() {
        return instance.get('todo-lists')
            .then(response => response.data);
    },

    getTodoTasks(todoListId) {
        return instance.get('todo-lists/' + todoListId + '/tasks')
            .then(response => response.data)
    },

    addTodoList(title) {
        return instance.post('todo-lists', { title })
            .then(response => response.data)
    },

    deleteTodoList(todoListId) {
        return instance.delete('todo-lists/' + todoListId)
            .then(response => response.data)
    },
    changeTodoList(todoListId, title) {
         return instance.put('todo-lists/' + todoListId, {
            title: title,
        })
            .then(response => {
                return response.data
            })
    },
    addTask(todoListId, title) {
        return instance.post('todo-lists/' + todoListId + '/tasks', { title: title }) //или просто title
            .then(response => response.data)
    },
    deleteTask(todoListId, taskId) {
        return instance.delete('todo-lists/' + todoListId + '/tasks/' + taskId)
            .then(response => response.data)
    },
    changeTask(todoListId, taskId, task) {
        return instance.put('todo-lists/' + todoListId + '/tasks/' + taskId, {
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority,
            startDate: task.startDate,
            deadline: task.deadline
        })
            .then(response => response.data)
    },

}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => response.data);
    },

    login(values) {
        return instance.post('auth/login', {
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe
        })
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    },
}





