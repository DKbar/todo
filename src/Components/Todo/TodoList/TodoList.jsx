import { NavLink } from "react-router-dom";
import styles from "./TodoList.module.css"
let TodoList = (props) => {
    return (
    <div className={styles.list}>
        <NavLink to={'/Todo/'+ props.id}>
            <div className={styles.title}>{props.title}</div>
        </NavLink>
    </div>
    )
}

export default TodoList;