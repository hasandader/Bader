import {
    SET_RENTER_INFO,
} from '../types/apiTypes';

const initialState = {
    renterInfo: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RENTER_INFO:
            return {
                ...state,
                renterInfo: action.renterInfo
            };
        default:
            return state;
    }
};

export default reducer;