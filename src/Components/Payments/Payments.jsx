import styles from "./Payments.module.css"
import PaymentsItems from "./PaymentsItems/PaymentsItems";

const Payments = ({ paymentsData }) => {

    let paymentsItems = paymentsData.map(payments => {
        return <PaymentsItems
            key={payments.date}
            date={payments.date}
            payments={payments.payments}
        />
    })
    return (
        <div className={styles.items}>
            <div>Months</div>
            {paymentsItems}
        </div>

    )
}

export default Payments;