import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../containers/video'
import Title from '../components/title'
import PlayPause from '../../player/components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import { isFullScreen, requestFullScreen, exitFullScreen } from '../../libs/utils'
import { connect } from 'react-redux';

class VideoPlayer extends Component {
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
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  handleFullScreenClick = event => {
    if (!isFullScreen()) {
      requestFullScreen( this.player )
    } else {
      exitFullScreen(this.player)
    }
  }
  setRef= element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
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
          <Volume
          handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
          handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    )
  }
}

const leftPad = n => `0${n}`.substr(-2)

const formattedTime = secs => `${leftPad(~~(secs / 60))} : ${leftPad(~~(secs % 60))}`

function mapStateToProps(state, props) {
  return {
    media: state.getIn(['data', 'entities', 'media', props.id])
  }
}


export default connect(mapStateToProps)(VideoPlayer)
