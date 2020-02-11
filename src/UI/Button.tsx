import React from 'react';
import './button.css';

interface Props {
  title: string;
  color?: 'red' | 'blue' | 'black';
  disabled?: boolean;
}

function Button({ title, color, disabled = false }: Props) {
  return (
    <button className={`button ${color} ${disabled ? 'disabled' : ''}`} disabled={disabled}>
      {title}
    </button>
  );
}

export default Button;