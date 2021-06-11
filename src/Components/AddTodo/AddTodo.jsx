import React, { useState } from 'react'

import Modal from '../Modal/Modal'

const AddTodo = () => {
  const [showModal, setShowModal] = useState(true)
  const handleCloseModal = () => setShowModal(false)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <button className="button" onClick={handleOpenOrAddTodoModal}>
        Close
      </button>
      <Modal showModal={showModal} onClose={handleCloseModal}>
        <h1>THis is modal</h1>
      </Modal>
    </>
  )
}

export default AddTodo