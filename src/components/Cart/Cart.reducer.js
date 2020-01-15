import { GET_CART_SUCCESS, GET_CART_AFTER_COUPON, GET_CART_TOTAL } from "./Cart.action"
const initialState = {
    data: [],
    coupon: {
        name: null,
        value: 0,

    },
    total: 0


}
export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART_SUCCESS:
            // action.payload = Array Cart
            return {...state, data: action.payload }
        case GET_CART_AFTER_COUPON:
            return {...state, coupon: action.coupon }
        case GET_CART_TOTAL:
            return {...state, total: action.total }
        default:
            return state
    }
}