import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdotesForm from './components/AnecdotesForm'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdotesForm />
    </div>
  )
}

export default App