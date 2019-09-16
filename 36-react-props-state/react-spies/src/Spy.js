import React from 'react'

const Spy = (props) => {
    console.log("props", props)
    return (
        <div>
            Code Name: {props.spy.codeName}

        </div>
    )
}

export default Spy