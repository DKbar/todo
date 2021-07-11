import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

const TaskChangeForm = (props) => {
    let taskData = {
        title: props.task.title,
        description: props.task.description,
        status: props.task.status,
        priority: props.task.priority,
        startDate: props.task.startDate,
        deadline: props.task.deadline
    };
    let [task, setTaskData] = useState(taskData)
    let changeTask = (todoListId, taskId, task) => {
        props.changeTask(todoListId, taskId, task);
        props.editTask()
    }

    let changeValue = (prop, e) => {
        setTaskData({ ...task, [prop]: e instanceof Date ? e : e.target.value})

    }
    return (<>
        <span>Title: <input onChange={(e) => changeValue('title', e)} value={task.title}></input></span>
        <span>Description: <input value={task.description} onChange={(e) => changeValue('description', e)}></input></span>
        <span>Status: <input value={task.status} onChange={(e) => changeValue('status', e)}></input></span>
        <span>Priority:<select value={task.priority} onChange={(e) => changeValue('priority', e)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select> </span>
{/*         <span>StartDate: <input type='datetime-local' value={task.startDate} onChange={(e) => changeValue('startDate', e)}></input></span>
        <span>Deadline: <input type='datetime-local' value={task.deadline} onChange={(e) => changeValue('deadline', e)}></input></span> */}
        <span>StartDate: <DateTimePicker value={task.startDate} onChange={(e) => changeValue('startDate', e)} format='dd/MM/y, HH:mm:ss' /></span>
        <span>Deadline: <DateTimePicker value={task.deadline} onChange={(e) => changeValue('deadline', e)} format='dd/MM/y, HH:mm:ss'/></span>
        {/* <button>Completed</button> */}
        <button onClick={() => changeTask(props.task.todoListId, props.task.id, task)}>Save</button>
    </>
    )
}
export default TaskChangeForm