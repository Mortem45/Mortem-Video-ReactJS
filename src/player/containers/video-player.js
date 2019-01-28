import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../containers/video'
import Title from '../components/title'
import PlayPause from '../../player/components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
export default class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: '',
    currentTime: '',
    timeFloat: 0,
    progress: 0,
    durationFloat: 0,
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount = () => {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: formattedTime(this.video.duration),
      durationFloat: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.video = event.target
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      timeFloat: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="este es un video"
        />
        <Controls>
          <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.timeFloat}
            max={this.state.durationFloat}
            handleProgressChange={this.handleProgressChange}
          />
        </Controls>
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

const leftPad = n => `0${n}`.substr(-2)

const formattedTime = secs => `${leftPad(~~(secs / 60))} : ${leftPad(~~(secs % 60))}`
