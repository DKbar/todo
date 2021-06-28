import React from 'react'
import { connect } from 'react-redux'
import { getAuthTC, logout } from '../../Redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.getAuth();
    }
    render() {
        return(
            <Header {...this.props}/> 
        )
       
    }

}

let mapStateToProps = (state) => {
    return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        getAuth: ()=>{
            dispatch(getAuthTC())
        },
        logout: ()=>{
            dispatch(logout())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)