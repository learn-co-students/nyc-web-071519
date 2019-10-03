import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'


const Todo = function (props) {
    console.log("Todo props:", props)

    const items = props.taskList.map(listItem => <Item key={listItem} item={listItem} clickHandler />)
    return (
        <>
            To Do List:
            <ul>
                {items}
            </ul>
        </>
    )
}

function msp(state) {
    console.log("state tree: ", state)
    return { taskList: state.taskList }
}



export default connect(msp)(Todo)