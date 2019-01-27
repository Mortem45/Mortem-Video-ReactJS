import React from 'react'
import './play-pause.css'
import Figure from '../../icons/components/figure';
export default function PlayPause(props) {
  return (
    <div className="PlayPause">
      {
        props.pause ?
        <button onClick={props.handleClick}>
          <Figure.Play size={25} color="white"/>
        </button>
        :
        <button onClick={props.handleClick}>
          <Figure.Pause size={25} color="white"/>
       </button>
      }
    </div>
  )
}