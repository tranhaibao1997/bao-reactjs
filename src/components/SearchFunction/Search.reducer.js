import { GET_SEARCHTEXT_SUCCESS } from "./Search.action"

const initialState = {
    searchText: "ao-so-mi-nam"
}

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SEARCHTEXT_SUCCESS:
            return {...state,
                searchText: action.searchText

            }


        default:
            return state
    }
}