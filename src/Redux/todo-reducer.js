import { todoAPI } from "../api/api";


const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_TASK = 'CHANGE_TASK';
const CHANGE_TODO_LIST = 'CHANGE_TODO_LIST';
const SET_TODO_TASKS = 'SET_TODO_TASKS'
const ADD_TODO_LIST = 'ADD_TODO_LIST';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
const SET_TODO_LISTS = 'SET_TODO_LISTS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const CHANGE_PAGE = 'CHANGE_PAGE'

let initialState = {
    todoLists: [],
    todoTasks: [
        {
            description: '',
            title: '',
            completed: false,
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
/*     newTodoListName: '', */
    isFetching: false,
    pageSize: 10,
    totalCount:null,
    currentPage: 1
};

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoTasks: [action.item,
/*                     action.item.deadline = new Date(action.item.deadline),
                    action.item.startDate = new Date(action.item.startDate), */
                     ...state.todoTasks.slice(0, 9)
                    ],
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
/*                         task.startDate = new Date(task.startDate);
                        task.deadline = new Date(task.deadline); */
                    }
                    return task;
                })],
            };
        case SET_TODO_TASKS:
            return {
                ...state,
                todoTasks: action.todoTasks
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
            case SET_TOTAL_PAGES_COUNT:
                return {
                    ...state,
                    totalCount: action.totalCount
                }; 
            case CHANGE_PAGE:
                return {
                    ...state,
                    currentPage: action.page
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
export const setTotalPagesCountAC = (totalCount) => ({ type: SET_TOTAL_PAGES_COUNT, totalCount });
export const changePageAC = (page) => ({ type: CHANGE_PAGE, page });

export const getTodoLists = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const data = await todoAPI.getTodoLists();
    dispatch(toggleIsFetchingAC(false));
    dispatch(setTodoListsAC(data));
    ;
}
export const addTodoList = (title) => async (dispatch) => {
    const data = await todoAPI.addTodoList(title);
    if (data.resultCode === 0) {
        dispatch(onAddTodoListAC(data.data.item))
    }
}
export const getTodoTasks = (todoListId, currentPage, pageSize) => async (dispatch) => {
    dispatch(changePageAC(currentPage))
    let data = await todoAPI.getTodoTasks(todoListId, currentPage, pageSize);
    dispatch(toggleIsFetchingAC(true))
    dispatch(setTodoTasksAC(data.items))
    dispatch(setTotalPagesCountAC(data.totalCount))

}
export const addTask = (todoListId, title, /* cb, */ totalCount) => async (dispatch, getState) => {
    let data = await todoAPI.addTask(todoListId, title);
    let totalCountUp = totalCount + 1;
    const pageSize = getState().todoPage.pageSize
    if (data.resultCode === 0) {
        let newTask = data.data.item;
        newTask.description = 'Описание';
        newTask.completed = false;
        newTask.status = 0;
        newTask.priority = 3;
        newTask.startDate = new Date();
        newTask.deadline = new Date(1000*60*60*24 + +new Date());
        dispatch(onAddTaskAC(newTask))
        dispatch(setTotalPagesCountAC(totalCountUp))
        dispatch(changeTask(newTask.todoListId, newTask.id, newTask))
        dispatch(getTodoTasks(todoListId, 1, pageSize))
/*         cb(); */
    }

}
export const deleteTask = (todoListId, taskId, totalCount, currentPage, pageSize) => async (dispatch) => {
    let totalCountDown = totalCount - 1;
    let data = await todoAPI.deleteTask(todoListId, taskId);
    if (data.resultCode === 0) {
        dispatch(onDeleteTaskAC(taskId))
        dispatch(setTotalPagesCountAC(totalCountDown))
        if (totalCountDown % 10 === 0){
            let currentPage = Math.ceil(totalCountDown / pageSize)
            dispatch(getTodoTasks(todoListId, currentPage, pageSize))
        }
    }
}
export const deleteTodoList = (todoListId) => async (dispatch) => {
    let data = await todoAPI.deleteTodoList(todoListId);
    if (data.resultCode === 0) {
        dispatch(onDeleteTodoListAC(todoListId))
    }
}
export const changeTodoList = (todoListId, title) => async (dispatch) => {
    let data = await todoAPI.changeTodoList(todoListId, title);
    if (data.resultCode === 0) {
        dispatch(changeTodoListAC(todoListId, title))
    }
}
export const changeTask = (todoListId, taskId, task) => async (dispatch) => {
    let data = await todoAPI.changeTask(todoListId, taskId, { ...task });
    if (data.resultCode === 0) {
        dispatch(changeTaskAC(taskId, data.data.item))
    }
}

export default todoReducer;