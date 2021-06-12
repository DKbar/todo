import Task from "./Task/Task"
import React from 'react'
import styles from "./Todo.module.css"


const Todo = (props) => {
    /* debugger */
    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text);
    }

    let onAddTask = () => {
        props.onAddTask();
    }
    let taskItem = props.todoPage.tasksData.map(task => {
        return <Task key={task.id} task={task.task} />
    })
    return (
        <div className={styles.items}>
            <input onChange={(e) => onChange(e)} value={props.todoPage.newTaskText}></input>
            <button onClick={() => onAddTask()}>Add task</button>
            {taskItem}
        </div>
    )
}

export default Todo;