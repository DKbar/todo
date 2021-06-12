const ADD_PAYMENT = 'ADD_PAYMENT';
const UPDATE_PAYMENT_TEXT = 'UPDATE_PAYMENT_TEXT';

let initialState = {
    paymentsData: [
        {
            date: '15.03.2021',
            payments: [
                { id: 1, payment: 'payment1', category: "home", cost: 50 },
                { id: 2, payment: 'payment2', category: "home", cost: 15 },
            ]
        },

        {
            date: '16.03.2021',
            payments: [
                { id: 3, payment: 'payment3', category: "car", cost: 150 },
                { id: 4, payment: 'payment4', category: "car", cost: 75 },
            ]
        },

    ],
    newPaymentText: 'beer',
};

const paymentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PAYMENT:
            let newPayment = {
                ld: 5,
                payment: state.newPaymentText,
                category: 'home',
                cost: 15
            }
            state.paymentsData.push({ date: '11.06.2021', payments: [newPayment] })
            state.newPayment = "";
            return state;
        case UPDATE_PAYMENT_TEXT:
            state.newPaymentText = action.text;
            return state;
        default:
            return state;
    }
}


export const onPaymentChangeAC = (text) => ({
    type: UPDATE_PAYMENT_TEXT,
    text: text
});
export const onAddPaymentAC = () => ({ type: ADD_PAYMENT })

export default paymentsReducer;