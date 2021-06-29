import { combineReducers } from 'redux'
import operationReducer from './operation_reducer'

const rootReducer = combineReducers({
    feedback: operationReducer
})

export default rootReducer