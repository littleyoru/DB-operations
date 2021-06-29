import axios from 'axios'
import ADD_STUDENT from './types'

const API_URL = 'http://localhost:3000/api'

export function addStudent() {
    return function(dispatch) {
        axios.post(`${API_URL}`).then(response => {
            dispatch({
                type: ADD_STUDENT,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}