import { connect } from "react-redux"
import {deleteTaskTC, addTaskTC, getTodoTasksTC, onTaskCreateAC, changeTaskTC } from "../../../Redux/todo-reducer"
import Todo from "./Todo"
import React from "react"
import { withRouter } from "react-router-dom"
import { compose } from "redux"


class TodoContainer extends React.Component {

    componentDidMount() {
        let todoListId = this.props.match.params.todoListId;
        this.props.getTodoTasks(todoListId);
    }

    render() {
        return <Todo todoTasks={this.props.todoPage.todoTasks}
            newTaskText={this.props.todoPage.newTaskText}
            onTaskCreate={this.props.onTaskCreate}
            addTask={this.props.addTask}
            deleteTask={this.props.deleteTask}
            changeTask={this.props.changeTask}
            todoListId={this.props.match.params.todoListId}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        todoPage: state.todoPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskCreate: (text) => {
            dispatch(onTaskCreateAC(text));
        },
        addTask: (todoListId, title) => {
            dispatch(addTaskTC(todoListId, title));
        },
        getTodoTasks: (todoListId) => {
            dispatch(getTodoTasksTC(todoListId))
        },
        deleteTask: (todoListId, taskId) => {
            dispatch(deleteTaskTC(todoListId, taskId))
        },

        changeTask: (todoListId, taskId, task) => {
            dispatch(changeTaskTC(todoListId, taskId, task))
        }

    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(TodoContainer)


