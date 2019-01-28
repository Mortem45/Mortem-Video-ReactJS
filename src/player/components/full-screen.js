import React from 'react';
import Figure from '../../icons/components/figure'
import './full-screen.css'
const FullScreen = (props) => (
  <div className="FullScreen">
    <button
      onClick = {props.handleFullScreenClick}
    >
      <Figure.FullScreen
      size={25}
      color="white"
      />
    </button>
  </div>
)

export default  FullScreen
