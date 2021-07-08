import Payment from "../Payment/Payment"
import styles from "./PaymentsItems.module.css"


const PaymentsItems = ({ date, payments }) => {

    return (
        <div>
            <div className={styles.date}>{date}</div>
            {payments.map(payment => {
                return <Payment
                    key={payment.id}
                    payment={payment.payment}
                    category={payment.category}
                    cost={payment.cost}
                />
            })}

        </div>


    )
}

export default PaymentsItems;