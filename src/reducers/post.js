export const responsePost = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST':
      return { ...state, loading: true }
    case 'NEWS_POST':
      return { ...state, data: action.json, loading: false }

    default:
      return state
  }
}

export const responseNews = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true }
    case 'NEWS_RECEIVED':
      return { ...state, data: action.json, loading: false }

    default:
      return state
  }
}
