import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'

function Completed({ list }) {
    // console.log("Completed props ", props)
    const items = list.map(listItem => <Item key={listItem} item={listItem} />)
    return (
        <>
            Completed Tasks:
        {/* {items} */}

        </>
    )
}
function msp(state) {
    return { list: state.completed }
}

export default connect(msp)(Completed)