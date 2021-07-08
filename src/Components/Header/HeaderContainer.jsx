import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../Redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {

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
        logout: ()=>{
            dispatch(logout())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)