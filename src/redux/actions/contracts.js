import { Alert } from 'react-native';
import {
    SET_CONTRACTS,
    SET_CONTRACT_DETAILS,
    SET_ACTIVE_CONTRACT,
    UI_START_LOADING,
    UI_STOP_LOADING,
} from '../types/apiTypes';
import { URL } from '../../lib/constants';

export const getContracts = (token) => {
    const url = `${URL}contracts`;
    return dispatch => {
        dispatch(setStartLoading('contracts'));
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
                dispatch(setContracts(parsedRes.data));
                dispatch(setStopLoading('contracts'));
                console.log('getContracts: ', parsedRes);
            })
            .catch(err => {
                console.log('getContracts err:', err);
                dispatch(setStopLoading('contracts'));
            });
    };
};

export const getContractDetails = (token, id) => {
    const url = `${URL}contracts/${id}`;
    return dispatch => {
        dispatch(setStartLoading('contractDetails'));
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
                dispatch(setContractDetails(parsedRes.data));
                dispatch(setStopLoading('contractDetails'));
                console.log('getContractDetails: ', parsedRes);
            })
            .catch(err => {
                console.log('getContractDetails err:', err);
                dispatch(setStopLoading('contractDetails'));
            });
    };
};

export const getActiveContract = (token) => {
    const url = `${URL}contracts?isActive=true`;
    return dispatch => {
        dispatch(setStartLoading('getActiveContract'));
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
                dispatch(setActiveContracts(parsedRes.data.contracts));
                dispatch(setStopLoading('getActiveContract'));
                console.log('getActiveContract: ', parsedRes);
            })
            .catch(err => {
                console.log('getActiveContract err:', err);
                dispatch(setStopLoading('getActiveContract'));
            });
    };
};

export const setContracts = (data) => {
    return {
        type: SET_CONTRACTS,
        contracts: data
    };
};

export const setContractDetails = (data) => {
    return {
        type: SET_CONTRACT_DETAILS,
        contractDetails: data
    };
};

export const setActiveContracts = (data) => {
    return {
        type: SET_ACTIVE_CONTRACT,
        activeContracts: data
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