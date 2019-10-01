import React from 'react'

const SearchForm = (props) => {


    return (
        <input type="text" placeholder="search spies" value={props.searchTerm} onChange={props.searchChangeHandler} />
    )
}

export default SearchForm