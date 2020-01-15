import { PRODUCTLIST_FAIL, PRODUCTLIST_REQUEST, PRODUCTLIST_SUCCESS } from "./ProductList.action"

const initialState = {
    data: [],
    metadata: {},
    load: false,
    fail: null
}

export default function ProductListReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTLIST_REQUEST:
            return {...state,
                loading: false,
                error: action.error

            }
        case PRODUCTLIST_SUCCESS:
            return {...state,
                load: false,
                data: action.payload,
                metadata: action.metadata
            }
        case PRODUCTLIST_FAIL:
            return {...state,
                load: true,
                error: action.error
            }

        default:
            return state
    }
}