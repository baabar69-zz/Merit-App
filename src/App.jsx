import React from 'react'
import TodoList from './Components/TodoList'

import './style.css'

const App = () => {
  return (
    <>
      <div className="title">Merit Todo App</div>
      <div className="description">Manage your tasks here</div>
      <TodoList/>
    </>
  )
}

export default App
