import { fromJS } from 'immutable';

const initialState = fromJS({
  visibility: false,
  mediaId: null,
})

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return state.merge({
        'visibility': true,
        'mediaId': action.payload.mediaId
      })
    case 'CLOSE_MODAL':
      return state.set('visibility', false)
    default:
      return state
  }
}