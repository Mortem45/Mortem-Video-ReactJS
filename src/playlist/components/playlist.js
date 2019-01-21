import React from 'react'
import Media from './media'
import Figure from '../../icons/components/figure'
import './playlist.css'



export default function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    console.log(props.data);
    return (
      <div className="playlist">
      <Figure.Play size={25} color={'black'}/>
      <Figure.Pause size={25} color={'black'}/>
      <Figure.Volume size={25} color={'black'}/>
      <Figure.FullScreen size={25} color={'black'}/>
      {
        playlist.map((item)=>{
          return <Media {...item} key={item.id}/>
        })
      }
      </div>
    )
}
