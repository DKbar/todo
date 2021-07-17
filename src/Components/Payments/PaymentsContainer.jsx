import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { getPayments, addPayments, onPaymentChangeAC, onPaymentCostChangeAC } from "../../Redux/payments-reducer";
import Payments from "./Payments";
import React from "react";


class PaymentsContainer extends React.Component{
    componentDidMount(){
        this.props.getPayments();
    }
    render(){
        return<Payments paymentsPage={this.props.paymentsPage} onChange={this.props.onChange} onCostChange={this.props.onCostChange} addPayments={this.props.addPayments}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        paymentsPage: state.paymentsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getPayments:() => {
            debugger
            dispatch(getPayments())
        },

        onChange: (text) => {
            dispatch(onPaymentChangeAC(text));
        },
        onCostChange: (num) => {
            dispatch(onPaymentCostChangeAC(num));
        },
        addPayments: () => {
            dispatch(addPayments())
        },

    }
}
/* const PaymentsContainer = connect (mapStateToProps, mapDispatchToProps)(withAuthRedirect(Payments)) */
export default connect (mapStateToProps, mapDispatchToProps)(withAuthRedirect(PaymentsContainer))
 ;