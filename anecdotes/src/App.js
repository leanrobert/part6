import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdotesForm from './components/AnecdotesForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { getAll } from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAll().then(notes => dispatch(initializeAnecdotes(notes)))
  }, [dispatch])

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