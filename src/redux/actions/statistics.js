import { Alert } from 'react-native';
import {
    SET_FINANCIAL_STATISTICS,
    SET_STATISTICS,
    UI_START_LOADING,
    UI_STOP_LOADING,
} from '../types/apiTypes';
import { URL } from '../../lib/constants';

export const getFinancialStatistics = (token) => {
    const url = `${URL}reports/statement_statistics`;
    return dispatch => {
        dispatch(setStartLoading('financialStatistics'));
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
                dispatch(setFinancialStatistics(parsedRes.data));
                dispatch(setStopLoading('financialStatistics'));
                console.log('getFinancialStatistics: ', parsedRes);
            })
            .catch(err => {
                console.log('getFinancialStatistics err:', err);
                dispatch(setStopLoading('financialStatistics'));
            });
    };
};

export const getStatistics = (token) => {
    const url = `${URL}statistics`;
    return dispatch => {
        dispatch(setStartLoading('statistics'));
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
                dispatch(setStatistics(parsedRes.data));
                dispatch(setStopLoading('statistics'));
                console.log('getStatistics: ', parsedRes);
            })
            .catch(err => {
                console.log('getStatistics err:', err);
                dispatch(setStopLoading('statistics'));
            });
    };
};

export const setFinancialStatistics = (data) => {
    return {
        type: SET_FINANCIAL_STATISTICS,
        financialStatistics: data
    };
};

export const setStatistics = (data) => {
    return {
        type: SET_STATISTICS,
        statistics: data
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