import styles from './Task.module.css'
import edit from "../../../assets/images/edit2.png"
import remove from "../../../assets/images/delete2.png"
import { useState } from 'react'
import TaskChangeForm from './TaskChangeForm'
import moment from 'moment'
import cn from 'classnames'


const TaskEdit = (props) => {

    let [active, setActive] = useState(false);
    let editMode = () => {
        setActive(!active);
    }

    /*     let changeTask = (todoListId, taskId, task) => {
            props.changeTask(todoListId, taskId, task);
            props.editTask()
        } */

    let removeTask = (todoListId, taskId, totalCount, currentPage, pageSize) => {
        props.deleteTask(todoListId, taskId, totalCount, currentPage, pageSize);

    }
    return (
        <div className={cn(styles.task, styles['status' + props.task.status],
            styles['priority' + props.task.priority], { [styles.completed]: props.task.status === 100 })}>
            <span className={styles.editControls}>
                <img src={edit} onClick={editMode} alt='edit' />
                <img src={remove} onClick={() => removeTask(props.task.todoListId, props.task.id, props.totalCount, props.currentPage, props.pageSize)} alt='remove' />
            </span>
            <div className={active ?  styles.hidden : styles.active}>
                <div className={styles.title}>{props.task.title}</div>
                <div>{props.task.description}</div>
                <div>{props.task.completed}</div>
                {/*  <div>{props.task.status}</div> */}
                {/* <div>{props.task.priority}</div> */}
                <div><span>Начало</span> {moment(props.task.startDate).locale('ru').format('DD/MM/YYYY, HH:mm:ss')}</div>
                <div><span>Конец</span>{moment(props.task.deadline).format('DD/MM/YYYY, HH:mm:ss')}</div>
                {/* <div>{props.task.order}</div> */}
                {/* <div>{props.task.addedDate}</div> */}
                {/* <input type='checkbox' onChange={()=>changeTask(props.task.todoListId, props.task.id, task)}></input> */}
                <div className={styles.progressBarWrap}>
                    <div className={styles.progressBar} style={{ width: `${props.task.status}%` }}></div>
                </div>
            </div>
            <div className={active ? styles.active : styles.hidden}>
                <TaskChangeForm task={props.task} changeTask={props.changeTask} editTask={editMode} />
            </div>
        </div>
    )
}

export default TaskEdit;