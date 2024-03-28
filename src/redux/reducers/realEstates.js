import {
    SET_REAL_ESTATES,
    SET_REAL_ESTATE_DETAILS,
    SET_REAL_ESTATES_UNITS,
    SET_REAL_ESTATES_CONTRACTS,
    SET_REAL_ESTATE_OUTGOINGS,
} from '../types/apiTypes';

const initialState = {
    realEstates: null,
    realEstateDetails: null,
    realEstatesUnits: null,
    realEstatesContracts: null,
    realEstatesOutgoings: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REAL_ESTATES:
            return {
                ...state,
                realEstates: action.realEstates
            };
        case SET_REAL_ESTATE_DETAILS:
            return {
                ...state,
                realEstateDetails: action.realEstateDetails
            };
        case SET_REAL_ESTATES_UNITS:
            return {
                ...state,
                realEstatesUnits: action.realEstatesUnits
            };
        case SET_REAL_ESTATES_CONTRACTS:
            return {
                ...state,
                realEstatesContracts: action.realEstatesContracts
            }
        case SET_REAL_ESTATE_OUTGOINGS:
            return {
                ...state,
                realEstatesOutgoings: action.realEstatesOutgoings
            }
        default:
            return state;
    }
};

export default reducer;