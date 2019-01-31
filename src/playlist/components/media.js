import React, { PureComponent } from 'react'
import './media.scss'
import PropTypes from 'prop-types'

class Media extends PureComponent {
  handleClick = event => {
    this.props.openModal(this.props)
  }
  render() {
    const style = {
      wrapper: {
        background: 'url('+this.props.cover+') center / cover no-repeat'
      }
    }
    return (
      <div className="media card" onClick={this.handleClick}>
        <div className="wrapper" style={ style.wrapper }>
          <div className="data">
            <div className="content">
              <span className="author">{this.props.director}</span>
              <h1 className="title"><a href="#">{this.props.title}</a></h1>
              <p className="text">{this.props.description}</p>
              <a href="#" className="button">Watch now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  director: PropTypes.string,
  description: PropTypes.string
}

export default Media;