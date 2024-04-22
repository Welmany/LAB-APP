import React from 'react';
import './button.css';

function Button({text}) {
  return (
   <button className='btn'>{text}</button>
  )
}

export default Button;
