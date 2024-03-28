import { Alert } from 'react-native';
import {
    SET_REAL_ESTATES,
    SET_REAL_ESTATE_DETAILS,
    SET_REAL_ESTATES_UNITS,
    SET_REAL_ESTATES_CONTRACTS,
    SET_REAL_ESTATE_OUTGOINGS,
    UI_START_LOADING,
    UI_STOP_LOADING,
} from '../types/apiTypes';
import { URL } from '../../lib/constants';

export const getRealEstates = (token) => {
    const url = `${URL}properties`;
    return dispatch => {
        dispatch(setStartLoading('realEstates'));
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
                dispatch(setRealEstates(parsedRes.data));
                dispatch(setStopLoading('realEstates'));
                console.log('setRealEstates: ', parsedRes);
            })
            .catch(err => {
                console.log('getRealEstates err:', err);
                dispatch(setStopLoading('realEstates'));
            });
    };
};

export const getRealEstateDetails = (token, id) => {
    const url = `${URL}properties/${id}`;
    return dispatch => {
        dispatch(setStartLoading('realEstateDetails'));
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
                dispatch(setRealEstateDetails(parsedRes.data));
                dispatch(setStopLoading('realEstateDetails'));
                console.log('setRealEstateDetails: ', parsedRes);
            })
            .catch(err => {
                console.log('getRealEstateDetails err:', err);
                dispatch(setStopLoading('realEstateDetails'));
            });
    };
};

export const getRealEstatesUnits = (token, id) => {
    const url = `${URL}property/units/${id}`;
    return dispatch => {
        dispatch(setStartLoading('realEstateUnits'));
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
                dispatch(setRealEstatesUnits(parsedRes.data));
                dispatch(setStopLoading('realEstateUnits'));
                console.log('getRealEstatesUnits: ', parsedRes);
            })
            .catch(err => {
                console.log('getRealEstatesUnits err:', err);
                dispatch(setStopLoading('realEstateUnits'));
            });
    };
};

export const getRealEstatesContracts = (token, id) => {
    const url = `${URL}property/contracts/${id}`;
    return dispatch => {
        dispatch(setStartLoading('realEstateContracts'));
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
                dispatch(setRealEstatesContracts(parsedRes.data));
                dispatch(setStopLoading('realEstateContracts'));
                console.log('getRealEstatesContracts: ', parsedRes);
            })
            .catch(err => {
                console.log('getRealEstatesContracts err:', err);
                dispatch(setStopLoading('realEstateContracts'));
            });
    };
};

export const getRealEstatesOutgoings = (token, id) => {
    const url = `${URL}property/expenses/${id}`;
    return dispatch => {
        dispatch(setStartLoading('realEstateOutgoings'));
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
                dispatch(setRealEstatesOutgoings(parsedRes.data));
                dispatch(setStopLoading('realEstateOutgoings'));
                console.log('getRealEstatesOutgoings: ', parsedRes);
            })
            .catch(err => {
                console.log('getRealEstatesOutgoings err:', err);
                dispatch(setStopLoading('realEstateOutgoings'));
            });
    };
};

export const setRealEstates = (data) => {
    return {
        type: SET_REAL_ESTATES,
        realEstates: data
    };
};

export const setRealEstateDetails = (data) => {
    return {
        type: SET_REAL_ESTATE_DETAILS,
        realEstateDetails: data
    };
};

export const setRealEstatesUnits = (data) => {
    return {
        type: SET_REAL_ESTATES_UNITS,
        realEstatesUnits: data
    };
};

export const setRealEstatesContracts = (data) => {
    return {
        type: SET_REAL_ESTATES_CONTRACTS,
        realEstatesContracts: data
    };
};

export const setRealEstatesOutgoings = (data) => {
    return {
        type: SET_REAL_ESTATE_OUTGOINGS,
        realEstatesOutgoings: data
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