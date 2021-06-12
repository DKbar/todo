
import { onAddPaymentAC, onPaymentChangeAC } from "../../Redux/payments-reducer";
import StoreContext from "../../StoreContext";
import Payments from "./Payments";


const PaymentsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let onChange = (text) => {
                        store.dispatch(onPaymentChangeAC(text));
                    }

                    let onAddPayment = () => {
                        store.dispatch(onAddPaymentAC())
                    }
                    return <Payments onChange={onChange} onAddPayment={onAddPayment} paymentsPage={state.paymentsPage} />
                }
            }

        </StoreContext.Consumer>)

}

export default PaymentsContainer;