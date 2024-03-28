import { Alert } from 'react-native';
import {
    SET_RENTER_INFO,
    UI_START_LOADING,
    UI_STOP_LOADING,
} from '../types/apiTypes';
import { URL } from '../../lib/constants';

export const getRenterInfo = (token, renterId) => {
    const url = `${URL}renter/${renterId}`;
    console.log('renterId: ', renterId)
    return dispatch => {
        dispatch(setStartLoading('renterInfo'));
        fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                dispatch(setRenterInfo(parsedRes.data));
                dispatch(setStopLoading('renterInfo'));
                console.log('getRenterInfo: ', parsedRes);
            })
            .catch(err => {
                console.log('getRenterInfo err:', err);
                dispatch(setStopLoading('renterInfo'));
            });
    };
};

export const setRenterInfo = (data) => {
    return {
        type: SET_RENTER_INFO,
        renterInfo: data
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