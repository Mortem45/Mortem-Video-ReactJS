import React from 'react';
import './progress-bar.css'
export default function ProgressBar(props) {
  return (
    <div className="ProgressBar">
      <input
        type="range"
        min={0}
        max={500}
        onChange={props.handleProgressChange}
        value={props.value}
        />
    </div>
  )
}