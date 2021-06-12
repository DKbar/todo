import { useState } from "react";
import { onAddPaymentAC, onPaymentChangeAC } from "../../Redux/payments-reducer";
import styles from "./Payments.module.css"
import PaymentsItems from "./PaymentsItems/PaymentsItems";

const Payments = (props) => {
    let paymentsItems = props.paymentsPage.paymentsData.map(payments => {
        return <PaymentsItems
            key={payments.date}
            date={payments.date}
            payments={payments.payments}
        />
    })

    let [active, setActive] = useState(false);
    let onClick = () => {
        debugger
        setActive(!active);
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.onChange();
    }

    let onAddPayment = () => {
        props.onAddPayment();
    }
    return (<>

        <div className={styles.items}>
            <div className={styles['button-wrap']}> 
                <button onClick={onClick}>123</button>
                <div className={active ? styles.active : styles.hidden}  >
                    <p onClick={onClick}>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
            </div>

            <input
                value={props.paymentsPage.newPaymentText}
                onChange={(e) => onChange(e)}
            />
            <button onClick={onAddPayment}>Add</button>
            <div>Months</div>
            {paymentsItems}
        </div>

    </>)
}

export default Payments;