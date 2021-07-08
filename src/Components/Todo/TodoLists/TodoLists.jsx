import React from "react";
import styles from "./TodoLists.module.css"
import TodoList from '../TodoList/TodoList'
import Preloader from "../../common/Preloader";
import TodoListsForm from "./TodoListsForm";


const TodoLists = (props) => {


    return (
        <>

            {props.todoPage.isFetching ? <Preloader /> : null}
            <div className={styles.items}>
                <TodoListsForm addTodoList={props.addTodoList} />
                <div className={styles.listItem}>
                    {props.todoPage.todoLists.map(list => {
                        return <TodoList key={list.id} title={list.title} id={list.id} 
                        deleteTodoList={props.deleteTodoList} changeTodoList={props.changeTodoList}/>
                    })}
                </div>

            </div>
        </>
    )
}

export default TodoLists