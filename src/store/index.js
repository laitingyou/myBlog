import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {count} from './reducers'
let reducer = combineReducers([count])
const store=createStore(
    reducer
)
export default store