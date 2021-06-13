import React from 'react'
import { connect } from "react-redux"
import { onAddTaskAC, onTaskChangeAC } from "../../Redux/todo-reducer"
import Todo from "./Todo"


const mapStateToProps = (state) => {
    return {
        todoPage: state.todoPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            dispatch(onTaskChangeAC(text));
            
        },

        onAddTask: () => {
            dispatch(onAddTaskAC());
        },
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)
export default TodoContainer;