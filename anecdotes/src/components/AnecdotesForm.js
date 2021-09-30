import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { createdNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdotesForm = () => {
    const dispatch = useDispatch()

    const addNote = e => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createNote(content))
        dispatch(createdNotification(content))
        setTimeout(() => {
            dispatch(resetNotification())
        }, 5000)
    }

    return (
        <form onSubmit={addNote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
    )
}

export default AnecdotesForm
