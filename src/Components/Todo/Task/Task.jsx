import styles from "./Task.module.css"

const Task = (props) => {
    console.log(11)
    return (
        <div>
        {props.task}
        </div>
    )
}

export default Task;