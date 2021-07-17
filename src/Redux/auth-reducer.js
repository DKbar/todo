import { authAPI, securityAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccessAC = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: { captchaUrl }
});

export const getAuthTC = () => (dispatch) => {
    return authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setUserDataAC(id, email, login, true))
            }
        })
};

export const login = (values, setStatus) => async (dispatch) => {
    let data = await authAPI.login(values);
    if (data.resultCode === 0) {
        dispatch(getAuthTC())
    } else if (data.resultCode === 10) {
        dispatch(getCapcthaUrl())
    } else {
        setStatus(data.messages[0])
    }
}
export const getCapcthaUrl = () => async (dispatch) => {

    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccessAC(captchaUrl))
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}

export default authReducer;