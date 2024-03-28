import {
    SET_TOKEN,
    SET_USER_INFO,
    SET_ERROR_MESSAGE,
    SET_APP_INTRO,
    SET_CONFIRMED_ACCOUNT,
} from '../types/apiTypes';

const initialState = {
    token: null, //'124587365da4563732c0b1ecb2aba7f2'
    userInfo: null,
    errorMessage: null,
    stopSplash: false,
    appIntro: false,
    confirmedAccount: false,
    updated: 'no',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token, //'124587365da4563732c0b1ecb2aba7f2'
                stopSplash: true
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case SET_APP_INTRO:
            return {
                ...state,
                appIntro: action.appIntro,
                // stopSplash: true
            };
        case SET_CONFIRMED_ACCOUNT:
            return {
                ...state,
                confirmedAccount: action.confirmedAccount,
                updated: action.updated,
                stopSplash: true
            };
        default:
            return state;
    }
};

export default reducer;