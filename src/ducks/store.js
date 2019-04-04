import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import CrudReducer from '../ducks/CrudReducer';
import UserReducer from '../ducks/UserReducer';

const reducers = combineReducers({CrudReducer, UserReducer});


export default createStore(reducers, applyMiddleware(promiseMiddleware));