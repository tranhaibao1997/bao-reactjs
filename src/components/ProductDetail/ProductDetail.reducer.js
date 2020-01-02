import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "./ProductDetail.action"

const initialState = {
    data: null,
    load: false,
    error: null
}

export default function ProductDetailReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {...state,
                load: false,
                error: action.error

            }
        case PRODUCT_DETAIL_SUCCESS:
            return {...state,
                load: false,
                data: action.payload
            }
        case PRODUCT_DETAIL_FAIL:
            return {...state,
                load: true,
                error: action.error
            }

        default:
            return state
    }
}