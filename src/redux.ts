import { applyMiddleware, combineReducers, createStore } from 'redux';
import usageStatistics from './reducers/usageStatistics';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    usageStatistics,
});

export default function configureStore(initialState: any) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
