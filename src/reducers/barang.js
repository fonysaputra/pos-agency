export const responseBarang = (state = {}, action) => {
    switch (action.type) {
        case 'GET_BARANG':
            return { ...state, loading: true }
        case 'NEWS_BARANG':
            return { ...state, data: action.json, page: action.page, loading: false }

        default:
            return state
    }
}

