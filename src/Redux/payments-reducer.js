const ADD_PAYMENT = 'ADD_PAYMENT';
const UPDATE_PAYMENT_TEXT = 'UPDATE_PAYMENT_TEXT';
const UPDATE_PAYMENT_COST = 'UPDATE_PAYMENT_COST'
let dateFormat = (num) => {
    if (num < 10) {
        num = "0" + num;
    }
    return num;

}

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
            date: '11.06.2021',
            payments: [
                { id: 3, payment: 'payment3', category: "car", cost: 150 },
                { id: 4, payment: 'payment4', category: "car", cost: 75 },
            ]
        },

    ],
    newPaymentText: '',
    newPaymentCost: 0,
};

const paymentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAYMENT:
            let newPayment = {
                id: 7,
                payment: state.newPaymentText,
                category: 'home',
                cost: state.newPaymentCost
            }
            let date = new Date();
            let now = dateFormat(date.getDate()) + "." + dateFormat((date.getMonth() + 1)) + "." + date.getFullYear();
            let obj = state.paymentsData.find(o => o.date === now);

           return (
                obj
                    ? {
                        ...state,
                        paymentsData: state.paymentsData.map(o => {
                            if (o.date === now) {
                              o.payments.push(newPayment);	
                            } 
                            return {...o, payments: o.payments.map(p => ({...p}))};
                        })
                    }

                    : {
                        ...state,
                        paymentsData: [...state.paymentsData, { date: now, payments: [newPayment] }]
                    }
            )

        case UPDATE_PAYMENT_TEXT:
            return {
                ...state,
                newPaymentText: action.text
            };
        case UPDATE_PAYMENT_COST:
            return {
                ...state,
                newPaymentCost: action.num
            };
        default:
            return state;
    }
}


export const onPaymentChangeAC = (text) => ({
    type: UPDATE_PAYMENT_TEXT,
    text: text
});

export const onPaymentCostChangeAC = (num) => ({

    type: UPDATE_PAYMENT_COST,
    num: num
});

export const onAddPaymentAC = () => ({ type: ADD_PAYMENT })

export default paymentsReducer;