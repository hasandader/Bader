import {
    SET_FINANCIAL_STATEMENT,
    SET_DUE_PAYMENTS,
    SET_OUTGOINGS_DOCS,
} from '../types/apiTypes';

const initialState = {
    financialStatement: null,
    duePayments: null,
    outgoingsDocs: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINANCIAL_STATEMENT:
            return {
                ...state,
                financialStatement: action.financialStatement
            };
        case SET_DUE_PAYMENTS:
            return {
                ...state,
                duePayments: action.duePayments
            };
        case SET_OUTGOINGS_DOCS:
            return {
                ...state,
                outgoingsDocs: action.outgoingsDocs
            };
        default:
            return state;
    }
};

export default reducer;