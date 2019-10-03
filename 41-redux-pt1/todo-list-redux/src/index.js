import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let defaultState = {
    taskList: ["learn redux", "practice redux"],
    completed: [],
    user: {}
}
//create a store using the createStore function and passing in at least a reducer function
const createdStore = createStore(reducer, defaultState)
// //console.log our state tree
// console.log("redux state: ", store.getState())


// // the reducer function is used to make changes to our state tree
function reducer(state, action) {
    console.log("reducer action", action)
    switch (action.type) {
        case "COMPLETED":
            debugger
            return { ...state, completed: ["all complete"], taskList: [] }
        default:
            return state
    }
}
// // the dispatch function is used to trigger the reducer function. Generally used when we need to invoke a change to our state tree 
// store.dispatch({ type: "something" })
// store.dispatch({ type: "type" })
// console.log("redux state deux: ", store.getState())



ReactDOM.render(
    <Provider store={createdStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
