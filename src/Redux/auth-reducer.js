import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}


export const setUserDataAC = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth }
});

export const getAuthTC = () => (dispatch) => {
    authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setUserDataAC(id, email, login, true))
            }
        })
};

export const login = (values) => (dispatch) => {
    authAPI.login(values)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(getAuthTC())
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(data =>{
        if(data.resultCode === 0){
            dispatch(setUserDataAC(null, null, null, false))
        }
    })
}

export default authReducer;