import { Alert } from 'react-native';
import {
    SET_TOKEN,
    SET_USER_INFO,
    SET_ERROR_MESSAGE,
    UI_START_LOADING,
    UI_STOP_LOADING,
    SET_APP_INTRO,
    SET_CONFIRMED_ACCOUNT,
} from '../types/apiTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../../lib/constants';

export const login = (email, password) => {
    const url = `${URL}login`;
    return dispatch => {
        dispatch(setStartLoading('login'));
        fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    if (parsedRes.data.type == 'renter') {
                        dispatch(setErrorMessage('customer not owner'))
                    } else {
                        dispatch(setUserInfo(parsedRes.data));
                        dispatch(setToken(parsedRes.data.auth_token));
                    }
                } else {
                    dispatch(setErrorMessage(parsedRes.error))
                }
                dispatch(setStopLoading('login'));
                console.log('login: ', parsedRes);
            })
            .catch(err => {
                console.log('login err:', err);
                dispatch(setStopLoading('login'));
            });
    };
};

export const confirmAccount = (code) => {
    const url = `${URL}verifyCode/${code}`;
    console.log('code: ', code)
    return dispatch => {
        dispatch(setStartLoading('confirmAccount'));
        fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    dispatch(setConfirmedAccount(true, 'yes'));
                    dispatch(setConfirmedAccountStatus());
                } else {
                    dispatch(setConfirmedAccount(false, 'yes'));
                }
                dispatch(setStopLoading('confirmAccount'));
                console.log('confirmAccount: ', parsedRes);
            })
            .catch(err => {
                console.log('confirmAccount err:', err);
                dispatch(setStopLoading('confirmAccount'));
            });
    };
};

export const getAuthData = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('token');
        token = JSON.parse(token);
        let appIntro = await AsyncStorage.getItem('appIntroScreens');
        appIntro = JSON.parse(appIntro);
        if (appIntro == null) appIntro = true;
        let confirmation = await AsyncStorage.getItem('confirmedAccount');
        confirmation = JSON.parse(confirmation);
        if (confirmation == null) confirmation = false;
        dispatch(setConfirmedAccount(confirmation));
        dispatch(setAppIntro(appIntro));
        dispatch(setToken(token));
    }
};

export const setAppIntroStatus = () => {
    return dispatch => {
        AsyncStorage.setItem('appIntroScreens', JSON.stringify(false));
    };
}

export const setConfirmedAccountStatus = () => {
    return dispatch => {
        AsyncStorage.setItem('confirmedAccount', JSON.stringify(true));
    };
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        token: token
    };
};

export const setUserInfo = (data) => {
    return {
        type: SET_USER_INFO,
        userInfo: data
    };
};

export const setErrorMessage = (error) => {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage: error
    };
};

export const setStartLoading = data => {
    return {
        type: UI_START_LOADING,
        value: data
    };
};

export const setStopLoading = data => {
    return {
        type: UI_STOP_LOADING,
        value: data
    };
};

export const setAppIntro = (data) => {
    return {
        type: SET_APP_INTRO,
        appIntro: data
    };
};

export const setConfirmedAccount = (data, updated = 'no') => {
    return {
        type: SET_CONFIRMED_ACCOUNT,
        confirmedAccount: data,
        updated: updated
    }
}