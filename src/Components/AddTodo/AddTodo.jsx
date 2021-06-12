import React, { useState } from 'react'

import { restRequest } from '../../Helpers/RequestHelper'

import Button from '../Button/Button'
import Input from '../Input/Input'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const postData = async () => {
    const payload = { title, description }
    restRequest('POST', '', payload)
  }

  return (
    <>
      <h1>Add your todos here</h1>
      <form onSubmit={postData}>
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
        <Button type="submit" label="Create" onClick={() => postData(true)} />
      </form>
    </>
  )
}

export default AddTodo
