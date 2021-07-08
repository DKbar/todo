import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect  = (Component) => {

    class withRedirect extends React.Component{
        
        render(){
            if (!this.props.isAuth){
                return <Redirect to='/Login' />
            }
            return <Component {...this.props} />
        }
    }
    
    let connectedWithRedirect = connect(mapStateToProps)(withRedirect)
    return connectedWithRedirect
}