import React from 'react'
import Spy from '../components/Spy'

const CaughtContainer = (props) => {
    console.log("spies:", props.spies)
    let spyList = props.spies.map(spyObj => <Spy key={spyObj.id} spy={spyObj} clickHandler={props.clickHandler} />)
    return (
        <div>
            <h1>Caught</h1>
            {spyList}
        </div>


    )
}
export default CaughtContainer