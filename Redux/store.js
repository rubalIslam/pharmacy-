import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import cartItems from './Reducers/cartItem'

import { productReducer } from './Reducers/productReducer';

const reducers = combineReducers({
    cartItems: cartItems,
    store: productReducer,
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;