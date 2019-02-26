const data = (state , action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = []
      if (action.payload.query) {
        state.data.categories.forEach( category => {
          results = results.concat(
            category.playlist.filter(
              item => item.director.toLowerCase().includes(action.payload.query.toLowerCase())
            )
          )
        })
      }
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data;