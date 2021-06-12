const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT';

let initialState = {
    tasksData: [
        { id: 1, task: 'task1' },
        { id: 2, task: 'task2' },
        { id: 3, task: 'task6' },
        { id: 4, task: 'task7' },
    ],
    newTaskText: '',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: 5,
                task: state.newTaskText,
            }
            state.tasksData.push(newTask);
            state.newTaskText = "";
            return state
        case UPDATE_TASK_TEXT:
            state.newTaskText = action.text;
            return state;
        default:
            return state;
    }
}

export const onTaskChangeAC = (text) => ({
    type: UPDATE_TASK_TEXT,
    text: text
});
export const onAddTaskAC = () => ({ type: ADD_TASK });

export default todoReducer;