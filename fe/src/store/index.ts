import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from '../reducers/index';

const rootReducer = combineReducers({
    weather: weatherReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

//export type RootState = ReturnType<any>;

export default store;