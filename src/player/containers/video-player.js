import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../containers/video'
import Title from '../components/title'
import PlayPause from '../../player/components/play-pause'

export default class VideoPlayer extends Component {
  state = {
    pause: true
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="este es un video"
        />
        <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video
          autoPlay={this}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
