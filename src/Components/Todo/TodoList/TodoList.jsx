import { NavLink } from "react-router-dom";
import styles from "./TodoList.module.css"
import { useState } from "react";
import edit from "../../../assets/images/edit1.png"
import remove from "../../../assets/images/delete1.png"
import TodoListForm from "./TodoListForm";
let TodoList = (props) => {

    let [active, setActive] = useState(false);
    let editMode = () => {
        setActive(!active);
    }
    let removeTodoList = (todoListId) => {
        props.deleteTodoList(todoListId);

    }
    return (
        <div className={styles.list}>
            <span className={styles.editControls}>
                <img src={edit} onClick={editMode} alt='edit' />
                <img src={remove} onClick={() => removeTodoList(props.id)} alt='remove' />
            </span>
            <div className={styles.title}>
                {active
                    ?
                    <TodoListForm todoListId={props.id} changeTodoList={props.changeTodoList} editMode={editMode}/>
                    : <NavLink to={'/Todo/' + props.id}>
                        <span>{props.title}</span>
                    </NavLink>
                }

            </div>
        </div>
    )
}

export default TodoList;