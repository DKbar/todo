
import { onAddPaymentAC, onPaymentChangeAC } from "../../Redux/payments-reducer";
import Payments from "./Payments";


const PaymentsContainer = (props) => {
    let state = props.store.getState()

    let onChange = (text) => {
        props.store.dispatch(onPaymentChangeAC(text));
    }

    let onAddPayment = () => {
        props.store.dispatch(onAddPaymentAC())
    }
    return <Payments onChange={onChange} onAddPayment={onAddPayment} paymentsPage={state.paymentsPage}/>
}

export default PaymentsContainer;