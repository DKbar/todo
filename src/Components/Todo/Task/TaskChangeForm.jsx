import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

const TaskChangeForm = (props) => {
    let taskData = {
        title: props.task.title,
        description: props.task.description,
        status: props.task.status,
        completed: props.task.completed,
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
        setTaskData({ ...task, [prop]: e instanceof Date ? e : e.target.value })

    }
    return (<>
        <div><span>Title: <input onChange={(e) => changeValue('title', e)} value={task.title}></input></span></div>
        <div><span>Description: <input value={task.description} onChange={(e) => changeValue('description', e)}></input></span></div>
        <div>        <span>Status: <input value={task.status} type='range' min='0' max='100' step='10' list="tickmarks"
            onChange={(e) => changeValue('status', e)}></input></span>
            <datalist id="tickmarks">
                {[...Array(10)].map((i, index) => { return <option value={index * 10} /> })}
            </datalist></div>
        <div>        <span>Priority:<select value={task.priority} onChange={(e) => changeValue('priority', e)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select> </span></div>
        <div><span>StartDate: <DateTimePicker value={task.startDate} onChange={(e) => changeValue('startDate', e)} format='dd/MM/y, HH:mm:ss' /></span></div>
        <div><span>Deadline: <DateTimePicker value={task.deadline} onChange={(e) => changeValue('deadline', e)} format='dd/MM/y, HH:mm:ss' /></span></div>
        <button onClick={() => changeTask(props.task.todoListId, props.task.id, task)}>Save</button>



        {/* <span>Complited: <input type='checkbox' onChange={(e) => changeValue('completed', e)}></input></span> */}
        {/*         <span>StartDate: <input type='datetime-local' value={task.startDate} onChange={(e) => changeValue('startDate', e)}></input></span>
        <span>Deadline: <input type='datetime-local' value={task.deadline} onChange={(e) => changeValue('deadline', e)}></input></span> */}


        {/* <button>Completed</button> */}

    </>
    )
}
export default TaskChangeForm