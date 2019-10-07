import React from 'react'
import { connect } from 'react-redux'
import { completeTask } from '../actions'

function Item(props) {
    return <li onClick={() => props.clickHandler(props.item)}>{props.item.task}</li>
}

function mdp(dispatch) {
    return { clickHandler: (task) => dispatch(completeTask(task)) }
}

export default connect(null, mdp)(Item)