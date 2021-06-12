import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/Button'

import './Modal.css'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ showModal, onClose, children }) => {
  if (showModal)
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-body">
          {children}
          <hr />
          <Button label="Close" onClick={onClose} />
        </div>
      </div>,
      modalRoot
    )
  return <></>
}
export default Modal
