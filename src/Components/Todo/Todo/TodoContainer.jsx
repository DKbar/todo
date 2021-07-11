import { connect } from "react-redux"
import { deleteTask, addTask, getTodoTasks, changeTask } from "../../../Redux/todo-reducer"
import React from "react"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { getTodoTasksS, getPageSize, getTotalCount, getCurrentPage } from "../../../Redux/todo-selectors"
import Todo from "./Todo"
import { withAuthRedirect } from "../../../HOC/WithAuthRedirect"
import Paginator from "../../common/Paginator"


class TodoContainer extends React.Component {

    componentDidMount() {
        let todoListId = this.props.match.params.todoListId;
        this.props.getTodoTasks(todoListId, this.props.currentPage, this.props.pageSize);
    }
    onPageChange = (page) => {
        let todoListId = this.props.match.params.todoListId;
        this.props.getTodoTasks(todoListId, page, this.props.pageSize)
    }

    render() {
        return <>
            <Paginator currentPage={this.props.currentPage} totalCount={this.props.totalCount} 
            pageSize={this.props.pageSize} onPageChange={this.onPageChange}/>
            <Todo todoTasks={this.props.todoTasks}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                addTask={this.props.addTask}
                deleteTask={this.props.deleteTask}
                changeTask={this.props.changeTask}
                todoListId={this.props.match.params.todoListId}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        todoTasks: getTodoTasksS(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state)
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        changeTask: (todoListId, taskId, task) => {
            dispatch(changeTaskTC(todoListId, taskId, task))
        }
    }
} */

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addTask,
        getTodoTasks,
        deleteTask,
        changeTask
    }),
    withRouter
)(TodoContainer)


