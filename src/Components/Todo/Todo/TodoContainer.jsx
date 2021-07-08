import { connect } from "react-redux"
import {deleteTaskTC, addTaskTC, getTodoTasksTC, changeTaskTC } from "../../../Redux/todo-reducer"
import React from "react"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { getTodoPage } from "../../../Redux/todo-selectors"
import Todo from "./Todo"
import { withAuthRedirect } from "../../../HOC/WithAuthRedirect"


class TodoContainer extends React.Component {

    componentDidMount() {
        let todoListId = this.props.match.params.todoListId;
        this.props.getTodoTasks(todoListId);
    }

    render() {
        return <Todo todoTasks={this.props.todoPage.todoTasks}
            /* newTaskText={this.props.todoPage.newTaskText} */
            /* onTaskCreate={this.props.onTaskCreate} */
            addTask={this.props.addTask}
            deleteTask={this.props.deleteTask}
            changeTask={this.props.changeTask}
            todoListId={this.props.match.params.todoListId}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        todoPage: getTodoPage(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todoListId, title, cd) => {
            dispatch(addTaskTC(todoListId, title, cd));
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
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(TodoContainer)


