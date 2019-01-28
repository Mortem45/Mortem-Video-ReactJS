import React from 'react';
import Figure from '../../icons/components/figure';
import './volume.css'
export default function Volume(props) {
  return (
    <button className="Volume">
      <Figure.Volume
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input
        type="range"
        min={0}
        max={1}
        step={.05}
        onChange={props.handleVolumeChange}
        />
      </div>

    </button>
  )
}