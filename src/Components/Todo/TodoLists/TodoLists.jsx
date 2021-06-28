import React from "react";
import styles from "./TodoLists.module.css"
import TodoList from '../TodoList/TodoList'
import Preloader from "../../common/Preloader";
import TodoListsForm from "./TodoListsForm";


class TodoLists extends React.Component {
/*     todoListNameUpdate = (e) => {
        let text = e.target.value;
        this.props.onUpdateTodoListName(text)
    }
    addTodoList = () => {
        let title = this.props.todoPage.newTodoListName
        this.props.addTodoList(title);
    } */
    render() {

        let todoListItem = this.props.todoPage.todoLists.map(list => {
            return <TodoList key={list.id} title={list.title} id={list.id} />
        })
        return (
            <>
                {this.props.todoPage.isFetching ? <Preloader /> : null}
                <div className={styles.items}>
                    <TodoListsForm addTodoList= {this.props.addTodoList}/>
{/*                     <input onChange={(e) => this.todoListNameUpdate(e)} value={this.props.todoPage.newTodoListName}></input>
                    <button onClick={() => this.addTodoList()}>Add TodoList</button> */}
                    <div className={styles.listItem}>
                        {todoListItem}
                    </div>

                </div>
            </>
        )
    }
}

export default TodoLists