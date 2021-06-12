import React from 'react'
import { onAddTaskAC, onTaskChangeAC } from "../../Redux/todo-reducer"
import Todo from "./Todo"


const TodoContainer = (props) => {
    let state = props.store.getState();
    let onChange = (text) => {
        props.store.dispatch(onTaskChangeAC(text));
    }

    let onAddTask = () => {
        props.store.dispatch(onAddTaskAC());
    }

    return <Todo  onChange={onChange} onAddTask={onAddTask} todoPage={state.todoPage}/>
}

export default TodoContainer;