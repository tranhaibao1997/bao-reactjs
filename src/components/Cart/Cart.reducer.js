import { GET_CART_SUCCESS } from "./Cart.action"
const initialState = {
    data: []
}
export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART_SUCCESS:
            // action.payload = Array Cart
            return {...state, data: action.payload }

        default:
            return state
    }
}