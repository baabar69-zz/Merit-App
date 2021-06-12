import React, { useState } from 'react'

import AddTodo from './AddTodo'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

const AddTodoModal = () => {
  const [showModal, setShowModal] = useState(true)
  const handleAddModal = (value = false) => setShowModal(value)

  return (
    <>
      <Button label="Add Todo" onClick={() => handleAddModal(true)} />
      <Modal showModal={showModal} onClose={() => handleAddModal(false)}>
        <AddTodo />
      </Modal>
    </>
  )
}
export default AddTodoModal
