import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { notificate } from '../reducers/notificationReducer'

const AnecdotesForm = () => {
    const dispatch = useDispatch()

    const addNote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createNote(content))
        dispatch(notificate(`${content} created!`, 3000))
    }

    return (
        <form onSubmit={addNote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
    )
}

export default AnecdotesForm
