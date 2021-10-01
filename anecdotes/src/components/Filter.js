import React from 'react'
import { connect } from 'react-redux'
import { filterNotes } from '../reducers/filterReducer'

const Filter = (props) => {
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={(e) => props.filterNotes(e.target.value)} />
        </div>
    )
}

const mapDispatchToProps = {
    filterNotes
}

const ConnectedFilters = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilters
