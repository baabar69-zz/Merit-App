import React, { useState, useEffect } from 'react'

import { restRequest } from '../../Helpers/RequestHelper'

import Input from '../Input/Input'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const fetchData = async () => {
    const payload = { title, description }
    restRequest('POST', '', payload)
  }

  return (
    <>
      <h1>Add your todos here</h1>
      <form onSubmit={fetchData}>
        <Input
          label="Title"
          value={title}
          onChange={(val) => setTitle(val.value)}
        />
        <Input
          label="description"
          value={description}
          onChange={(val) => setDescription(val.value)}
        />
        
      </form>
    </>
  )
}

export default AddTodo
