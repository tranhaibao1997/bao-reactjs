import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import loginReducer from './components/Login/Login.reducer'
import registerReducer from './components/Register/Register.reducer'
import ProductListReducer from './components/ProductList/ProductList.reducer'
import ProductDetailReducer from './components/ProductDetail/ProductDetail.reducer'
import CartReducer from './components/Cart/Cart.reducer'
import FavoriteReducer from './components/Favorite/Favorite.reducer'

import thunk from 'redux-thunk'


const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
    }
}
const reducers = combineReducers({ loginReducer, registerReducer, ProductListReducer, ProductDetailReducer, CartReducer, FavoriteReducer })

export const store = createStore(reducers,
    compose(
        applyMiddleware(thunk, logger, crashReporter),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))