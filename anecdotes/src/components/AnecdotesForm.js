import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { notificate } from '../reducers/notificationReducer'

const AnecdotesForm = (props) => {
    const addNote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        props.createNote(content)
        props.notificate(`${content} created!`, 3000)
    }

    return (
        <form onSubmit={addNote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
    )
}

const mapDispatchToProps = {
    createNote,
    notificate
}

const ConnectedAnecdotesForm = connect(null, mapDispatchToProps)(AnecdotesForm)

export default ConnectedAnecdotesForm
