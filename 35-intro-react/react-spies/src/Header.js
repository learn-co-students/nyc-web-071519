import React from 'react'

const Header = (props) => {
    console.log("Header Props:", props.coho)
    return <h1>Welcome {props.cohortName} to React-Spies</h1>

}

export default Header 