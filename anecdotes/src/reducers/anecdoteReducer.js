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

export const createNote = data => {
  return {
    type: 'NEW_NOTE',
    data
  }
}

export const voteNote = id => {
  return {
    type: 'VOTE_NOTE',
    data: { id }
  }
}

export const initializeAnecdotes = notes => {
  return {
    type: 'INIT_NOTES',
    data: notes
  }
}

export default anecdoteReducer