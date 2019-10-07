import { combineReducers } from 'redux'


let defaultState = {
    taskList: [],
    completed: []
}


function getTasksReducer(state = defaultState.taskList, action) {
    switch (action.type) {
        case "TASKS":
            return action.payload
        default:
            return state
    }
}

function completeTaskReducer(state = defaultState.completed, action) {
    switch (action.type) {
        case "COMPLETED":
            return action.payload
        default:
            return state
    }
}

const reducer = combineReducers({
    taskList: getTasksReducer,
    completed: completeTaskReducer
})

export { reducer }