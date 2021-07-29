import { applyMiddleware, combineReducers, createStore } from 'redux'
import { valuteReducer } from './valuteReducer'
import thunk from 'redux-thunk'

const  {createLogger} =require('redux-logger')
const logger = createLogger({
  diff: true,
  collapsed: true
  })


const rootReducer = combineReducers({
  valute: valuteReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk,logger))