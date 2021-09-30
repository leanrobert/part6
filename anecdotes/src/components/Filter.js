import React from 'react'
import { useDispatch } from 'react-redux'
import { filterNotes } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(filterNotes(e.target.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter
