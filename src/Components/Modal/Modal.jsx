import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ showModal, onClose, children }) => {
  if (showModal)
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-body">
          {children}
          <hr />
          <button className="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>,
      modalRoot
    )
  return <></>
}
export default Modal
