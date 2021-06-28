import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { onAddPaymentAC, onPaymentChangeAC, onPaymentCostChangeAC } from "../../Redux/payments-reducer";
import Payments from "./Payments";



const mapStateToProps = (state) =>{
    return {
        paymentsPage: state.paymentsPage,
        isAuth: state.auth.isAuth
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
const PaymentsContainer = connect (mapStateToProps, mapDispatchToProps)(withAuthRedirect(Payments))
export default PaymentsContainer;