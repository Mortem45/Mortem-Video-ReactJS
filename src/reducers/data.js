import schema from '../schemas';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: [],
})
export default function data (state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = []
      state.data.categories.forEach( category => {
        results = results.concat(
          category.playlist.filter(
            item => item.director.toLowerCase().includes(action.payload.query.toLowerCase())
          )
        )
      })
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}
