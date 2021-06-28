import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = (props) => {
    const logout = () => {
        props.logout()
    }
    return (
    <header className={styles.header}>    
        <div className={styles.itemSmall}>
            {props.isAuth 
            ?<div> 
            {props.login}
            <div className={styles.logout} onClick={logout}>Logout</div>
            </div>
            :<NavLink to='/Login' activeClassName={styles.activeLink}>Login</NavLink>
            }
            
        </div>
        <div className={styles.itemSmall}>
            <NavLink to='/Settings' activeClassName={styles.activeLink}>Settings</NavLink>
        </div>

        <div className={styles.name}>Trata</div>
        <div className={styles.items}>
            <div className={styles.item}>
                <NavLink to='/TodoLists' activeClassName={styles.activeLink}>Todo</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Payments' activeClassName={styles.activeLink}>Расходы</NavLink>
            </div>
        </div>
    </header>
    )
}

export default Header;