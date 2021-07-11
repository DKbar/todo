/* import { createSelector } from "reselect" */

/* const getTodoPageSelector = (state) => {
    return state.todoPage.todoTasks
}

export const getTodoPage = createSelector(getTodoPageSelector,
    (task) => {
        debugger
        return task.filter(p => true)
    }) */ // example reselect
export const getTodoListsS = (state) => {
    return state.todoPage.todoLists
}
export const getTodoTasksS = (state) => {
    return state.todoPage.todoTasks
}
export const getIsFetching = (state) => {
    return state.todoPage.isFetching
}

export const getPageSize = (state) => {
    return state.todoPage.pageSize
}

export const getTotalCount = (state) => {
    return state.todoPage.totalCount
}

export const getCurrentPage = (state) => {
    return state.todoPage.currentPage
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}


