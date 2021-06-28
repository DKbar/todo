import Task from "../Task/Task"
import React from 'react'
import styles from "./Todo.module.css"
import Preloader from "../../common/Preloader"
import TodoForm from './TodoForm'


class Todo extends React.Component {
   
/*     onAddTask = () => {
        let todoListId = this.props.todoListId;
        let title = this.props.newTaskText;
        this.props.addTask(todoListId, title)
    }
    onTaskCreate = (e) => {
        let text = e.target.value;
        this.props.onTaskCreate(text);
    } */


/*     onAddTask = () => {
        let todoListId = this.props.todoListId;
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists/' + todoListId + '/tasks', {
            title: this.props.newTaskText
        }, {
            withCredentials: true,
            headers: { "API-KEY": "be208add-76be-474f-b426-6fa8679c0152" }
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.onAddTask()
            }
        })
    } */



    render() {
        if (!this.props.todoTasks){
            return <Preloader />
        }
        let taskItem = this.props.todoTasks.map(task => {
            return <Task key={task.id} task={task} deleteTask={this.props.deleteTask} changeTask={this.props.changeTask}/>})    
        return (
            <div className={styles.items}>
            <TodoForm addTask={this.props.addTask} todoListId={this.props.todoListId}/>
{/*                 <input onChange={(e) => this.onTaskCreate(e)} value={this.props.newTaskText}></input>
                <button onClick={() => this.onAddTask()}>Add task</button> */}
                {taskItem}
            </div>
        )
    }
}

export default Todo;