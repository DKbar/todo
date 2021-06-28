import Task from "../Task/Task"
import React from 'react'
import styles from "./Todo.module.css"
import Preloader from "../../common/Preloader"


const Todo = (props) => {

    if (!props.todoTasks) {
        return <Preloader />
    }
    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text);
    }
    let onAddTask = () => {
        let todoListId = props.todoListId;
        let title = props.newTaskText;
        props.addTask(todoListId, title)
    }

    /*     let taskItem = props.todoPage.todoLists.find(o => o.id === todoListId).tasksData.map(task => {
        return <Task key={task.id} task={task.task} />
    }) */

    let taskItem = props.todoTasks.map(task => {
        return <Task key={task.id} task={task.title} />
    })

    return (
        <div className={styles.items}>
            <input onChange={(e) => onChange(e)} value={props.newTaskText}></input>
            <button onClick={() => onAddTask()}>Add task</button>
            {taskItem}
        </div>
    )
}



export default Todo;