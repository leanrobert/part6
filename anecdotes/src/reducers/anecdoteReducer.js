import { createNew, getAll } from "../services/anecdotes"

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]

    case 'INIT_NOTES':
      return action.data

    case 'VOTE_NOTE':
      const id = action.data.id
      const findNote = state.find(note => note.id === id)
      const votedNote = {
        ...findNote,
        votes: findNote.votes + 1
      }
      return state.map(note => note.id !== id ? note : votedNote).sort((a, b) => b.votes - a.votes)

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

export const voteNote = id => {
  return {
    type: 'VOTE_NOTE',
    data: { id }
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