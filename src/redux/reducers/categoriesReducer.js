export const SET_CATEGORIES = 'SET_CATEGORIES'

const initialState = {
    categories: [],
    initialized: false
}

export default function categoriesReducer(state = initialState, action) {
    console.log('>> categoriesReducer params', state, action)

    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                initialized: true
            }

        default:
            return state
    }
}