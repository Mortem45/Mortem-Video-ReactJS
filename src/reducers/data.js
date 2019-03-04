import schema from '../schemas';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: '',
})
export default function data (state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_ENTITIES': {
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}
