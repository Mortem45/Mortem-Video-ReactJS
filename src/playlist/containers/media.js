import React, { Component } from 'react'
import Media from '../components/media';
import { connect } from 'react-redux';
import { openModal } from '../../actions';
class MediaContainer extends Component {
  openModal = (id) => {
    this.props.openModal(id)
  }
  render() {
    return <Media openModal={this.openModal} {...this.props.data.toJS()}/>
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

const mapDispatchToProps = {
  openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)