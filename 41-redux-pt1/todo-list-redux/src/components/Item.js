import React from 'react'
import { connect } from 'react-redux'

function Item(props) {
    return <li onClick={props.clickHandler}>{props.item}</li>
}

function mdp(dispatch) {
    console.log("msp", dispatch)
    return { clickHandler: () => dispatch({ type: "COMPLETED" }) }
}

export default connect(null, mdp)(Item)