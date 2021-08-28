import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import { counter, initialState } from '../reducers'
import courses from '../reducers/courseReducer'

const createRootReducer = combineReducers(
  { 
    courses,
    counter
  }
)
const makeStore = () => {
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose

  return createStore(
    createRootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
}

export default createWrapper(makeStore, {debug: true})
