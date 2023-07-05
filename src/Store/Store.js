import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  Reducer  from '../Store/Reducer/Reducer.js'

const Store = createStore(Reducer,applyMiddleware(thunk))

export default Store