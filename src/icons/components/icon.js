import React from 'react';

export default function Icon(props) {
  const {
    color,
    size
  } = props
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 32 32"
    >
      {props.children}
    </svg>
   )
}