import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux';
import { searchEntities } from '../../actions';

class SearchContainer extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.searchEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element;
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = {
  searchEntities
}

export default connect(null, mapDispatchToProps)(SearchContainer)
