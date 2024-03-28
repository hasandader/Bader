import {
    SET_FINANCIAL_STATISTICS,
    SET_STATISTICS,
} from '../types/apiTypes';

const initialState = {
    financialStatistics: null,
    statistics: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINANCIAL_STATISTICS:
            return {
                ...state,
                financialStatistics: action.financialStatistics
            };
        case SET_STATISTICS:
            return {
                ...state,
                statistics: action.statistics
            };
        default:
            return state;
    }
};

export default reducer;