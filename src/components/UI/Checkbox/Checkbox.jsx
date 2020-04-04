import React from 'react';
import vector from './vector.svg';
import './Checkbox.css';

export default ({ checked, onChange }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" onChange={onChange} className="checkbox__input" checked={checked} />
      <div className="checkbox__custom-box">
        <img src={vector} alt="vector" />
      </div>
    </label>
  )
}