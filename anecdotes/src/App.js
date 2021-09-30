import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdotesForm from './components/AnecdotesForm'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdotesForm />
    </div>
  )
}

export default App