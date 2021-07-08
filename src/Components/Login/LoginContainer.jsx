import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }

}
let LoginContainer = connect(mapStateToProps, { login })(Login)
export default LoginContainer;



