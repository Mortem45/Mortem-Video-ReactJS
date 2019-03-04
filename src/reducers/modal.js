import { fromJS } from 'immutable';

const initialState = fromJS({
  visibility: false,
  mediaId: null,
})

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return state
    case 'CLOSE_MODAL':
      return state
    default:
      return state
  }
}