import { createNew, getAll, voteOne } from "../services/anecdotes"

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]

    case 'INIT_NOTES':
      return action.data.sort((a, b) => b.votes - a.votes)

    case 'VOTE_NOTE':
      const id = action.data.id
      return state.map(note => note.id !== id ? note : action.data).sort((a, b) => b.votes - a.votes)

    default:
      return state
  }
}

export const createNote = content => {
  return async dispatch => {
    const newNote = await createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

export const voteNote = anecdote => {
  return async dispatch => {
    const note = await voteOne(anecdote)
    dispatch({
      type: 'VOTE_NOTE',
      data: note
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export default anecdoteReducer