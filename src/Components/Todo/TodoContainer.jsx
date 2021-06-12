import React from 'react'
import { onAddTaskAC, onTaskChangeAC } from "../../Redux/todo-reducer"
import StoreContext from '../../StoreContext'
import Todo from "./Todo"


const TodoContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let onChange = (text) => {
                        store.dispatch(onTaskChangeAC(text));
                    }

                    let onAddTask = () => {
                        store.dispatch(onAddTaskAC());
                    }

                    return <Todo onChange={onChange} onAddTask={onAddTask} todoPage={state.todoPage} />
                }
            }

        </StoreContext.Consumer>)

}

export default TodoContainer;