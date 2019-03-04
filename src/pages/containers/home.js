import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handleError'
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list} from 'immutable';
import { openModal, closeModal } from '../../actions';

class Home extends Component {
  handleOpenModal = (id) => {
    this.props.openModal(id)
  }
  handleCloseModal = (event) =>{
    this.props.closeModal()
  }
  render() {
    return (
      <HandleError>
      <HomeLayout>
        <Related/>
        <Categories
        categories={this.props.categories}
        handleOpenModal={this.handleOpenModal}
        search={this.props.search}
        />
        {
          this.props.modal.get('visibility') &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <VideoPlayer
              autoplay
              id={this.props.modal.get('mediaId')}
              />
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map((categoryId) => {
    return state.getIn(['data', 'entities', 'categories', categoryId])
  })
  let searchResults = list()
  const search = state.getIn(['data', 'search'])
  if(search) {
		const mediaList = state.get('data').get('entities').get('media');
		searchResults = mediaList.filter((item) => {
			if (item.get('director').toLowerCase().includes(search.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase())){
				return true
			}
		}).toList();
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get('modal')
  }
}

const mapDispatchToProps = {
  openModal,
  closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
