import moment from "moment";
import { useState } from "react";
import styles from "./Task.module.css"
import TaskEdit from "./TaskEdit";

const Task = (props) => {
    let [editMode, setEditMode] = useState(false)
    let editTask = () => {
        setEditMode(!editMode)
    }
    return (
        <div>
            <TaskEdit {...props} editTask={editTask} />
        </div>

    )
}

export default Task;
{/* <input className={styles.task} onBlur={saveEdit}></input>} */ }

{/* <div className={styles.task} onMouseOver={editTask} onClick={editTask}>
<div className={styles.title}>{props.task.title}</div>
<div>{props.task.description}</div>
<div>{props.task.status}</div>
<div>{props.task.priority}</div>
<div>{moment(props.task.startDate).format('DD/MM/YYYY, hh:mm:ss')}</div>
<div>{moment(props.task.deadline).format('DD/MM/YYYY, hh:mm:ss')}</div>
</div> */}