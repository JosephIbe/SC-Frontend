import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState:any = [];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

export default store;