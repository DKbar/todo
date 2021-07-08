import moment from "moment";
import { todoAPI } from "../api/api";

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_TASK = 'CHANGE_TASK';
const CHANGE_TODO_LIST = 'CHANGE_TODO_LIST';
const SET_TODO_TASKS = 'SET_TODO_TASKS'
const ADD_TODO_LIST = 'ADD_TODO_LIST';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
const SET_TODO_LISTS = 'SET_TODO_LISTS'
/* const UPDATE_NEW_TODO_LIST_NAME = 'UPDATE_NEW_TODO_LIST_NAME' */
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
/* let state = [
                {
                id: 1,
                title: 123,
                tasksData: [
                    { id: 1, task: 'task1' },
                    { id: 2, task: 'task2' },
                    { id: 3, task: 'task6' },
                    { id: 4, task: 'task7' },
                ]
            },
            {
                id: 2,
                title: 234,
                tasksData: [
                    { id: 1, task: 'task1' },
                    { id: 2, task: 'task2' },
                    { id: 3, task: 'task6' },
                    { id: 4, task: 'task7' },
                ]
            },
            {
                id: 3,
                title: 345,
                tasksData: [
                    { id: 1, task: 'task1' },
                    { id: 2, task: 'task2' },
                    { id: 3, task: 'task6' },
                    { id: 4, task: 'task7' },
                ]
            },
        ] */

let initialState = {
    todoLists: [],
    todoTasks: [
        {
            description: '',
            title: '',
            completed: '',
            status: '',
            priority: '',
            startDate: new Date(),
            deadline: new Date(),
            id: '',
            todoListId: '',
            order: '',
            addedDate: '',
        }
    ],
    newTodoListName: '',
    isFetching: false,
};

const todoReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TASK:
            return {
                ...state,
                todoTasks: [action.item, ...state.todoTasks.slice(0, 9)],
            }
        case DELETE_TASK:
            return {
                ...state,
                todoTasks: [...state.todoTasks.filter(task => {
                    return task.id !== action.taskId;
                })],
            };
        case CHANGE_TASK:
            return {
                ...state,
                todoTasks: [...state.todoTasks.map(task => {
                    if (task.id === action.taskId) {
                        task = action.task;
                        task.startDate = new Date(task.startDate);
                        task.deadline= new Date(task.deadline);
                    }
                    return task;
                })],
            };
        case SET_TODO_TASKS:
            return {
                ...state,
                todoTasks: action.todoTasks.map(o => {
                    o.startDate = new Date(o.startDate); 
                    o.deadline = new Date(o.deadline); 
                    return { ...o }
                }),

            };


        case ADD_TODO_LIST:

            return {
                ...state,
                todoLists: [action.item, ...state.todoLists]
            };

        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: [...state.todoLists.filter(todoList => {
                    return todoList.id !== action.todoListId;
                })],
            };

        case CHANGE_TODO_LIST:
            return {
                ...state,
                todoLists: [...state.todoLists.map(todoList => {
                    if (todoList.id === action.todoListId) {
                        todoList.title = action.title
                    }
                    return todoList;
                })],
            };

        case SET_TODO_LISTS:
            return {
                ...state,
                todoLists: action.todoLists,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}


export const changeTaskAC = (taskId, task) => ({
    type: CHANGE_TASK,
    taskId: taskId,
    task: task
});
export const onAddTaskAC = (item) => ({ type: ADD_TASK, item });
export const onDeleteTaskAC = (taskId) => ({ type: DELETE_TASK, taskId });
export const onAddTodoListAC = (item) => ({ type: ADD_TODO_LIST, item });
export const onDeleteTodoListAC = (todoListId) => ({ type: DELETE_TODO_LIST, todoListId });
export const changeTodoListAC = (todoListId, title) => ({
    type: CHANGE_TODO_LIST,
    todoListId: todoListId,
    title: title
});
export const setTodoListsAC = (todoLists) => ({ type: SET_TODO_LISTS, todoLists });
export const setTodoTasksAC = (todoTasks) => ({ type: SET_TODO_TASKS, todoTasks });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getTodoListsTC = () => (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    todoAPI.getTodoLists().then(data => {
        dispatch(toggleIsFetchingAC(false));
        dispatch(setTodoListsAC(data));
    });
}
export const addTodoListTC = (title) => (dispatch) => {
    todoAPI.addTodoList(title).then(data => {
        if (data.resultCode === 0) {
            dispatch(onAddTodoListAC(data.data.item))
        }
    })
}
export const getTodoTasksTC = (todoListId) => (dispatch) => {
    todoAPI.getTodoTasks(todoListId)
        .then(data => {
            dispatch(toggleIsFetchingAC(true))
            dispatch(setTodoTasksAC(data.items))
        })
}
export const addTaskTC = (todoListId, title, cb) => (dispatch) => {
    todoAPI.addTask(todoListId, title).then(data => {
        if (data.resultCode === 0) {
            let newTask = data.data.item;
            newTask.description = 'Описание';
            newTask.completed = false;
            newTask.status = 3;
            newTask.priority = 3;
            newTask.startDate = new Date().toLocaleTimeString();
            newTask.deadline = new Date().toLocaleTimeString();
            dispatch(onAddTaskAC(newTask))
            dispatch(changeTaskTC(newTask.todoListId, newTask.id, newTask))
            cb();
        }
    })
}
export const deleteTaskTC = (todoListId, taskId) => (dispatch) => {
    todoAPI.deleteTask(todoListId, taskId).then(data => {
        if (data.resultCode === 0) {
            /* dispatch(getTodoTasksTC(todoListId)) */
            dispatch(onDeleteTaskAC(taskId))
        }
    })
}

export const deleteTodoListTC = (todoListId) => (dispatch) => {
    todoAPI.deleteTodoList(todoListId).then(data => {
        if (data.resultCode === 0) {
            /* dispatch(getTodoTasksTC(todoListId)) */
            dispatch(onDeleteTodoListAC(todoListId))
        }
    })
}
export const changeTodoListTC = (todoListId, title) => (dispatch) => {
    todoAPI.changeTodoList(todoListId, title).then(data => {
        if (data.resultCode === 0) {
            /* dispatch(getTodoTasksTC(todoListId)) */
            dispatch(changeTodoListAC(todoListId, title))
        }
    })
}

export const changeTaskTC = (todoListId, taskId, task) => (dispatch) => {
    todoAPI.changeTask(todoListId, taskId, { ...task }).then(data => {
        if (data.resultCode === 0) {
            /* dispatch(getTodoTasksTC(todoListId)) */
            dispatch(changeTaskAC(taskId, data.data.item))
        }
    })
}
export default todoReducer;