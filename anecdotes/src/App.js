import React from 'react'
import { useSelector } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdotesForm from './components/AnecdotesForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const notification = useSelector(state => state.notification)

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification.message && <Notification />}
      <Filter />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdotesForm />
    </div>
  )
}

export default App