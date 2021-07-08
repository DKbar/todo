import Task from "../Task/Task"
import React from 'react'
import styles from "./Todo.module.css"
import Preloader from "../../common/Preloader"
import TodoForm from './TodoForm'

class Todo extends React.PureComponent {
   
    render() {
        console.log (1)
        if (!this.props.todoTasks){
            return <Preloader />
        }
        let taskItem = this.props.todoTasks.map(task => {
            return <Task key={task.id} task={task} deleteTask={this.props.deleteTask} changeTask={this.props.changeTask}/>})    
        return (
            <div className={styles.items}>
            <TodoForm addTask={this.props.addTask} todoListId={this.props.todoListId}/>
                {taskItem}
            </div>
        )
    }
}

export default Todo;