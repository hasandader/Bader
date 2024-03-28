import { Alert } from 'react-native';
import {
    SET_FINANCIAL_STATEMENT,
    SET_DUE_PAYMENTS,
    UI_START_LOADING,
    UI_STOP_LOADING,
    SET_OUTGOINGS_DOCS,
} from '../types/apiTypes';
import { URL } from '../../lib/constants';

export const getFinancialStatement = (token, toDate, fromDate, propertyID) => {
    const url = `${URL}reports/statement?toDate=${toDate}&fromDate=${fromDate}&property_id=${propertyID}`;
    return dispatch => {
        dispatch(setStartLoading('financialReport'));
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
                dispatch(setFinancialStatement(parsedRes.data[0]));
                dispatch(setStopLoading('financialReport'));
                console.log('getFinancialStatement: ', parsedRes);
            })
            .catch(err => {
                console.log('getFinancialStatement err:', err);
                dispatch(setStopLoading('financialReport'));
            });
    };
};

export const getDuePayments = (token, ownerId, limit) => {
    const url = `${URL}GetAllDuePayments/${ownerId}?limit=${limit}`;
    return dispatch => {
        dispatch(setStartLoading('duePayments'));
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
                dispatch(setDuePayments(parsedRes.data));
                dispatch(setStopLoading('duePayments'));
                console.log('getDuePayments: ', parsedRes);
            })
            .catch(err => {
                console.log('getDuePayments err:', err);
                dispatch(setStopLoading('duePayments'));
            });
    };
};

export const getOutgoingsDocs = (token) => {
    const url = `${URL}getissues`;
    return dispatch => {
        dispatch(setStartLoading('getOutgoingsDocs'));
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
                dispatch(setOutgoingsDocs(parsedRes.data));
                dispatch(setStopLoading('getOutgoingsDocs'));
                console.log('getOutgoingsDocs: ', parsedRes);
            })
            .catch(err => {
                console.log('getOutgoingsDocs err:', err);
                dispatch(setStopLoading('getOutgoingsDocs'));
            });
    };
};

export const setFinancialStatement = (data) => {
    return {
        type: SET_FINANCIAL_STATEMENT,
        financialStatement: data
    };
};

export const setDuePayments = (data) => {
    return {
        type: SET_DUE_PAYMENTS,
        duePayments: data
    };
};

export const setOutgoingsDocs = (data) => {
    return {
        type: SET_OUTGOINGS_DOCS,
        outgoingsDocs: data
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