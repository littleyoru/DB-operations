import { ADD_STUDENT } from '../actions/types'

const INITIAL_STATE = { 
    name: '',
    age: 0,
    city: '',
    feedback: ''
 }

 export default function (state = INITIAL_STATE, action) {
     switch (action.type) {
         case ADD_STUDENT:
            return {...state, feedback: action.payload.feedback}
     }
     return state
 }