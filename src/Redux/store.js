import todoReducer  from "./todo-reducer";
import paymentsReducer  from "./payments-reducer";

let store = {

    _state: {
        todoPage: {
            tasksData: [
                { id: 1, task: 'task1' },
                { id: 2, task: 'task2' },
                { id: 3, task: 'task6' },
                { id: 4, task: 'task7' },
            ],
            newTaskText: '',
        },

        paymentsPage: {
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
        },


    },

    _callSubscriber() {
        console.log(1)
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.todoPage = todoReducer(this._state.todoPage, action);
        this._state.paymentsPage = paymentsReducer(this._state.paymentsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;