import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../containers/video'
import Title from '../components/title'

export default class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="este es un video"
        />
        <Video
          autoPlay={this}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
