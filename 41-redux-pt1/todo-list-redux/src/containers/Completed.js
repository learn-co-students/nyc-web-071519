import React from 'react'
import Item from '../components/Item'

export default function Completed({ list }) {
    const items = list.map(listItem => <Item key={listItem} item={listItem} />)
    return (
        <>
            Completed Tasks:
        {items}

        </>
    )
}