import styles from "./Payment.module.css"

const Payment = ({ date, category, payment, cost }) => {
    
    return (
        <div className={styles.payment}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <td>
                            {category}
                        </td>
                        <td>
                            {payment}
                        </td>
                        <td>
                            {cost}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Payment;