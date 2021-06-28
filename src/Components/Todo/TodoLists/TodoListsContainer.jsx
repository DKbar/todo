import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../../HOC/WithAuthRedirect"
import { addTodoListTC, getTodoListsTC, onUpdateTodoListNameAC } from "../../../Redux/todo-reducer"
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

        return <TodoLists todoPage={this.props.todoPage}
            onUpdateTodoListName={this.props.onUpdateTodoListName}
            addTodoList={this.props.addTodoList} />
    }
}

let mapStateToProps = (state) => {
    return {
        todoPage: state.todoPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTodoListName: (text) => {
            dispatch(onUpdateTodoListNameAC(text))
        },
        getTodoLists:() =>{
            dispatch(getTodoListsTC())
        },
        addTodoList: (title) =>{
            dispatch(addTodoListTC(title))
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
