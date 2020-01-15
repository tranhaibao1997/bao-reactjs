export const GET_CART_SUCCESS = "GET_CART_SUCCESS"
export const GET_CART_AFTER_COUPON = "GET_CART_AFTER_COUPON"
export const GET_CART_TOTAL = "GET_CART_TOTAL"



export function getCartSuccessAction(payload) {
    return {
        type: GET_CART_SUCCESS,
        payload: payload
    }
}
export function getCartAfterCouponAction(coupon) {
    return {
        type: GET_CART_AFTER_COUPON,

        coupon: coupon
    }
}
export function getCartTotal(total) {
    return {
        type: GET_CART_TOTAL,
        total: total
    }
}

export function getCartSuccess(cart) {
    return (dispatch) => {
        // truyen array Cart cho CartReducer
        dispatch(getCartSuccessAction(cart))

    }
}
export function getCartAfterCouponSuccess(coupon) {
    return (dispatch) => {
        // truyen array Cart cho CartReducer
        dispatch(getCartAfterCouponAction(coupon))

    }
}
export function getCartTotalSuccess(total) {
    return (dispatch) => {
        // truyen array Cart cho CartReducer
        dispatch(getCartTotal(total))

    }
}