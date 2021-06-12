import React from 'react'
import './Button.css'

const Button = ({ type = '', label, onClick }) => {
  const HandleOnClick = (e) => {
    e.preventDefault()
    onClick()
  }
  return (
    <button type={type} className="button" onClick={HandleOnClick}>
      {label}
    </button>
  )
}

export default Button
