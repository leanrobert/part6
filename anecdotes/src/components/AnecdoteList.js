import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteNote } from '../reducers/anecdoteReducer'
import { notificate } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({notes, filter}) => {
        if (filter) {
            return notes.filter(note => note.content.includes(filter) && note)
        }

        return notes
    })

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteNote(anecdote))
        dispatch(notificate(`${anecdote.content} voted!`, 3000))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList
