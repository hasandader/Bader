import {
    UI_START_LOADING, UI_STOP_LOADING
} from '../types/apiTypes';

const initialState = {
    isLoading: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_START_LOADING:
            return {
                ...state,
                isLoading: state.isLoading.concat([action.value])
            };
        case UI_STOP_LOADING:
            return {
                ...state,
                isLoading: state.isLoading.filter(item => item != action.value)
            };
        default:
            return state;
    }
};

export default reducer;
