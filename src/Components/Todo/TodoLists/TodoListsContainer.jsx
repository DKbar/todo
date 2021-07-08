import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../../HOC/WithAuthRedirect"
import { addTodoListTC, changeTodoListTC, deleteTodoListTC, getTodoListsTC } from "../../../Redux/todo-reducer"
import { getIsAuth, getTodoPage } from "../../../Redux/todo-selectors"
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
        /* console.log('render') */
        return <TodoLists todoPage={this.props.todoPage}
            addTodoList={this.props.addTodoList}
            deleteTodoList={this.props.deleteTodoList} 
            changeTodoList={this.props.changeTodoList}/>
    }
}

let mapStateToProps = (state) => {
    /* console.log('mapstate') */
    return {
        todoPage: getTodoPage(state),
        isAuth: getIsAuth(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getTodoLists:() =>{
            dispatch(getTodoListsTC())
        },
        addTodoList: (title) =>{
            dispatch(addTodoListTC(title))
        },
        deleteTodoList: (todoListId) => {
            dispatch(deleteTodoListTC(todoListId))
        },
        changeTodoList:(todoListId, title) => {
            dispatch(changeTodoListTC(todoListId, title))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
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
