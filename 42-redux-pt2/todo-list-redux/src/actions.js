function completed() {
    return { type: "COMPLETED" }
}

function fetchTasks(dispatch) {
    return function () {
        return fetch("http://localhost:4000/taskList")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "TASKS", payload: data }))
    }
}
function completeTask(task) {
    return (dispatch) => {
        return fetch(`http://localhost:4000/taskList/1`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(resp => resp.json())
            //grab data and send dispatch
            .then(console.log)
    }
}

export { completed, fetchTasks, completeTask }