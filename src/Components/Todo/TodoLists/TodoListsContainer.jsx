import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../../HOC/WithAuthRedirect"
import { addTodoList, changeTodoList, deleteTodoList, getTodoLists } from "../../../Redux/todo-reducer"
import { getIsAuth, getIsFetching, getTodoListsS } from "../../../Redux/todo-selectors"
import TodoLists from "./TodoLists"

class TodoListsContainer extends React.Component {

    componentDidMount() {
        this.props.getTodoLists()
    }
    /*     componentDidUpdate(prevProps, prevState){
            if (prevProps.prop != this.props.prop){
                действие
            }
        } */
    render() {
        return <TodoLists todoLists={this.props.todoLists}
            isFetching={this.props.isFetching}
            addTodoList={this.props.addTodoList}
            deleteTodoList={this.props.deleteTodoList}
            changeTodoList={this.props.changeTodoList} />
    }
}
let mapStateToProps = (state) => {
    return {
        todoLists: getTodoListsS(state),
        isFetching: getIsFetching(state),
        isAuth: getIsAuth(state),
    }
}
export default compose(
    connect(mapStateToProps, {
        getTodoLists,
        addTodoList,
        deleteTodoList,
        changeTodoList
    }),
    withAuthRedirect
)(TodoListsContainer)


/* let withRedirect = withAuthRedirect(TodoListsContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withRedirect) */
/* export default connect(mapStateToProps, {
    setTodoLists: setTodoListsAC,                   //!!!рефакторинг!!! dispatch создастся connect
    onUpdateTodoListName: onUpdateTodoListNameAC,
    onAddTodoList,                                     //!!!рефакторинг!!! если имя action criator совпадает
    toggleIsFetching
})(TodoListsContainer) */
