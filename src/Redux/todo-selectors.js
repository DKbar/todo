/* import { createSelector } from "reselect" */

/* const getTodoPageSelector = (state) => {
    return state.todoPage.todoTasks
}

export const getTodoPage = createSelector(getTodoPageSelector,
    (task) => {
        debugger
        return task.filter(p => true)
    }) */ // example reselect
export const getTodoPage = (state) => {
    return state.todoPage
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}
