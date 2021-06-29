import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import { Router } from 'react-router'
import reducers from '../reducers/index'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.querySelector('#app')
    )
    // <App />, document.getElementById('root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
