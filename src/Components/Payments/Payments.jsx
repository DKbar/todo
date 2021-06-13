import { useState } from "react";
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
        setActive(!active);
    }

    let paymentChange = (e) => {
        let text = e.target.value;
        props.onChange(text);
    }

    let costChange = (e) => {
        let num = e.target.value;
        props.onCostChange(num);
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
                onChange={(e) => paymentChange(e)}
            />
            <input
                value={props.paymentsPage.newPaymentCost}
                onChange={costChange}
            />
            <button onClick={onAddPayment}>Add</button>
            <div>Months</div>
            {paymentsItems}
        </div>

    </>)
}

export default Payments;