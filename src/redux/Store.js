import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {RootReducers} from './reducers';

export default function configureStore(){
    return createStore(RootReducers,applyMiddleware(thunk));
}