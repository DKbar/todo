import { todoAPI } from "../api/api";

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_TASK = 'CHANGE_TASK';
const ADD_TODO_LIST = 'ADD_TODO_LIST';
const CREATE_NEW_TASK_TEXT = 'CREATE_NEW_TASK_TEXT';
const SET_TODO_LISTS = 'SET_TODO_LISTS'
const SET_TODO_TASKS = 'SET_TODO_TASKS'
const UPDATE_NEW_TODO_LIST_NAME = 'UPDATE_NEW_TODO_LIST_NAME'
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



        /*         let dateFormat = (num) => {
            if (num < 10) {
                num = "0" + num;
            }
            return num;
        } */

        let date = new Date();

        //let now = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

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
    newTaskText: '',
    newTodoListName: '',
    isFetching: false,
};

const todoReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TASK:
            /* debugger */
            /* let newTask = action.item */

            return {
                ...state,
                todoTasks: [action.item, ...state.todoTasks.slice(0, 9)],
                newTaskText: ''
            }
        case DELETE_TASK:
            return {
                ...state,
                todoTasks: [...state.todoTasks.filter(task => {
                    return task.id != action.taskId;
                })],
            };
        case CHANGE_TASK:
            return {
                ...state,
                todoTasks: [...state.todoTasks.map(task => {
                    if (task.id === action.taskId){
                        task = action.task
                    }
                    return task;
                })],
            };

        case CREATE_NEW_TASK_TEXT:
            return { ...state, newTaskText: action.text };

        case UPDATE_NEW_TODO_LIST_NAME:
            return { ...state, newTodoListName: action.text };

        case ADD_TODO_LIST:
/*             let newTList = {
                id: 5,
                title: state.newTodoListName,
            } */
            return {
                ...state,
                todoLists: [action.title,...state.todoLists]
            };

        case SET_TODO_LISTS:
            return {
                ...state,
                todoLists: action.todoLists,
            };
        case SET_TODO_TASKS:
            action.todoTasks.forEach(task => {
                task.deadline = new Date();
                task.startDate = new Date();
            });
            return {
                ...state,
                todoTasks: action.todoTasks,
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

export const onTaskCreateAC = (text) => ({
    type: CREATE_NEW_TASK_TEXT,
    text: text
});

export const onUpdateTodoListNameAC = (text) => ({
    type: UPDATE_NEW_TODO_LIST_NAME,
    text: text
});

export const changeTaskAC = (taskId, task) => ({
    type: CHANGE_TASK,
    taskId: taskId,
    task: task
});

export const onAddTaskAC = (item) => ({ type: ADD_TASK, item });
export const onDeleteTaskAC = (taskId) => ({ type: DELETE_TASK, taskId });
export const onAddTodoListAC = (title) => ({ type: ADD_TODO_LIST, title });
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
            dispatch(onAddTodoListAC(title))
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
export const addTaskTC = (todoListId, title) => (dispatch) => {
    todoAPI.addTask(todoListId, title).then(data => {
        if (data.resultCode === 0) {
            let newTask = data.data.item;
            newTask.description = 'Описание';
            newTask.completed = false;
            newTask.status = 3;
            newTask.priority = 3;
            newTask.startDate = date.toLocaleTimeString();
            newTask.deadline = date.toLocaleTimeString();
            dispatch(onAddTaskAC(newTask))
            dispatch(changeTaskTC(newTask.todoListId, newTask.id, newTask))

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

export const changeTaskTC = (todoListId, taskId, task) => (dispatch) => {
    todoAPI.changeTask(todoListId, taskId, {...task}).then(data => {
        if (data.resultCode === 0) {
            /* dispatch(getTodoTasksTC(todoListId)) */
            dispatch(changeTaskAC(taskId, data.data.item))
        }
    })
}
export default todoReducer;