import { GET_FAVORITE_SUCCESS } from "./Favorite.action"
const initialState = {
    data: []
}
export default function FavoriteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FAVORITE_SUCCESS:
            // action.payload = Array Cart
            return {...state, data: action.payload }

        default:
            return state
    }
}