import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { createdNotification, resetNotification } from '../reducers/notificationReducer'
import { createNew } from '../services/anecdotes'

const AnecdotesForm = () => {
    const dispatch = useDispatch()

    const addNote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        const newNote = await createNew(content)
        dispatch(createNote(newNote))
        dispatch(createdNotification(newNote.content))
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
