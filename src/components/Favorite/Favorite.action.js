export const GET_FAVORITE_SUCCESS = "GET_FAVORITE__SUCCESS"



export function getFavoriteSuccessAction(payload) {
    return {
        type: GET_FAVORITE_SUCCESS,
        payload: payload
    }
}

export function getFavoriteSuccess(cart) {
    return (dispatch) => {

        dispatch(getFavoriteSuccessAction(cart))

    }
}