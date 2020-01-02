export const GET_CART_SUCCESS = "GET_CART_SUCCESS"



export function getCartSuccessAction(payload) {
    return {
        type: GET_CART_SUCCESS,
        payload: payload
    }
}

export function getCartSuccess(cart) {
    return (dispatch) => {
        // truyen array Cart cho CartReducer
        dispatch(getCartSuccessAction(cart))

    }
}