import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    return (
    <header className={styles.header}>
        <div className={styles.settings}>
            <NavLink to='/Settings' activeClassName={styles.activeLink}>Settings</NavLink>
        </div>
        <div className={styles.name}>Trata</div>
        <div className={styles.items}>
            <div className={styles.item}>
                <NavLink to='/Todo' activeClassName={styles.activeLink}>Todo</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Payments' activeClassName={styles.activeLink}>Расходы</NavLink>
            </div>
        </div>
    </header>
    )
}

export default Header;