import Task from "../Task/Task"
import React from 'react'
import styles from "./Todo.module.css"
import Preloader from "../../common/Preloader"
import TodoForm from "./TodoForm"

const Todo =  React.memo(props => {
    if (!props.todoTasks) {
        return <Preloader />
    }
    let taskItem = props.todoTasks.map(task => {
        return <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTask={props.changeTask} 
        totalCount={props.totalCount} currentPage={props.currentPage} pageSize={props.pageSize}/>
    })
    return (
        <div className={styles.items}>
            <TodoForm addTask={props.addTask} todoListId={props.todoListId} totalCount={props.totalCount}/>
            {taskItem}
        </div>
    )
})


export default Todo;