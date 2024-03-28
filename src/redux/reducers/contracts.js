import {
    SET_CONTRACTS,
    SET_CONTRACT_DETAILS,
    SET_ACTIVE_CONTRACT,
} from '../types/apiTypes';

const initialState = {
    contracts: null,
    contractDetails: null,
    activeContracts: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTRACTS:
            return {
                ...state,
                contracts: action.contracts
            };
        case SET_CONTRACT_DETAILS:
            return {
                ...state,
                contractDetails: action.contractDetails
            };
        case SET_ACTIVE_CONTRACT:
            return {
                ...state,
                activeContracts: action.activeContracts
            };
        default:
            return state;
    }
};

export default reducer;