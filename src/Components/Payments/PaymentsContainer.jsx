import { connect } from "react-redux";
import { onAddPaymentAC, onPaymentChangeAC, onPaymentCostChangeAC } from "../../Redux/payments-reducer";
import Payments from "./Payments";



const mapStateToProps = (state) =>{
    return {
        paymentsPage: state.paymentsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onChange: (text) => {
            dispatch(onPaymentChangeAC(text));
        },
        onCostChange: (num) => {
            dispatch(onPaymentCostChangeAC(num));
        },
        onAddPayment: () => {
            dispatch(onAddPaymentAC())
        },
    }
}
const PaymentsContainer = connect (mapStateToProps, mapDispatchToProps)(Payments)
export default PaymentsContainer;