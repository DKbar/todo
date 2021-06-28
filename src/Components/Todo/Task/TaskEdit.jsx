import styles from './Task.module.css'
import edit from "../../../assets/images/edit.png"
import remove from "../../../assets/images/delete.png"
import { useState } from 'react'
import TaskChangeForm from './TaskChangeForm'
import moment from 'moment'


const TaskEdit = (props) => {
    let [active, setActive] = useState(false);
    let changeTask = () => {
        setActive(!active);
    }
    let removeTask = (todoListId, taskId) => {
        props.deleteTask(todoListId, taskId);

    }
    return (
        <div className={styles.red} /* onBlur={props.editTask} */ /* onMouseOut={props.editTask} */>
            <span className={styles.editControls}>
                <img src={edit} onClick={changeTask} />
                <img src={remove} onClick={() => removeTask(props.task.todoListId, props.task.id)} />
            </span>
            <div>{props.task.title}</div>
            <div>{props.task.description}</div>
            <div>{props.task.completed}</div>
            <div>{props.task.status}</div>
            {/* <div>{props.task.priority}</div> */}
            <div>{moment(props.task.startDate).format('DD/MM/YYYY, hh:mm:ss')}</div>
            <div>{moment(props.task.deadline).format('DD/MM/YYYY, hh:mm:ss')}</div>
            {/* <div>{props.task.order}</div> */}
            {/* <div>{props.task.addedDate}</div> */}
            <button onClick={props.editTask}>Completed</button>
            <div className={active ? styles.active : styles.hidden}>
                <TaskChangeForm task={props.task} changeTask={props.changeTask} editTask={props.editTask} />
            </div>
        </div>
    )
}

export default TaskEdit;