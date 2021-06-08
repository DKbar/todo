import Task from "./Task/Task"
import styles from "./Todo.module.css"

const Todo = ({tasksData}) => {

    let taskItem = tasksData.map(task => {
        return <Task key={task.id} task={task.task} />
    })
    return (
        <div className={styles.items}>
            <input></input>
            {taskItem}
        </div>
    )
}

export default Todo;