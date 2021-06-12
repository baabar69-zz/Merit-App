import React from 'react'
import './Input.css'
const Input = ({ label, onChange, value }) => {
  return (
    <div class="input">
      <div class="input-body">
        <input
          type="text"
          value={value}
          onChange={onChange}
          class="input-field"
          placeholder={label}
        />
        <label class="input-label">{label}</label>
      </div>
    </div>
  )
}

export default Input
