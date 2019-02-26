import React from 'react'
import Media from '../containers/media'
import './playlist.css'



export default function Playlist(props) {
    return (
      <div className="playlist">
      {
        props.playlist.map((item) => {
          return(
            <Media
              id={item}
              key={item}
              openModal={props.handleOpenModal}
              />
          )
        })
      }
      </div>
    )
}
