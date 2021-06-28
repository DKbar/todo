import LoginForm from "./LoginForm"
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'

let Login = (props) => {
        if (props.isAuth) {
        return <Redirect to={"/TodoLists"}/>
    }
    return (<>
        <div className={styles.login}>
        <h2>Login</h2>    
        <LoginForm login={props.login} isAuth = {props.isAuth}/>
        </div>
        </>
        )

}

        export default Login