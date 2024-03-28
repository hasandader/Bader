import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import realEstatesReducer from './reducers/realEstates';
import contractsReducer from './reducers/contracts';
import financialStatementReducer from './reducers/financialStatement';
import statisticsReducer from './reducers/statistics';
import rentersReducer from './reducers/renters';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
    auth: authReducer,
    realEstates: realEstatesReducer,
    contracts: contractsReducer,
    financialStatement: financialStatementReducer,
    statistics: statisticsReducer,
    renters: rentersReducer,
    ui: uiReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
