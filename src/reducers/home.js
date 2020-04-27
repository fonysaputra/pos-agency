export const responseHome = (state = {}, action) => {
    switch (action.type) {
        case 'GET_HOME':
            return { ...state, loading: true }
        case 'NEWS_HOME':
            return { ...state, data: action.json, page: action.page, loading: false }

        default:
            return state
    }
}

