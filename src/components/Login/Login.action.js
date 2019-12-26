export const LOGIN_REQUEST = "LOGIN-REQUEST"
export const LOGIN_SUCCESS = "LOGIN-SUCCESS"
export const LOGIN_FAIL = "LOGIN-FAIL"

function loginRequestAction() {
    return {
        type: LOGIN_REQUEST
    }
}

function loginSuccessAction(payload) {
    return {
        type: LOGIN_REQUEST,
        payload: payload
    }
}

function loginFailAction(error) {
    return {
        type: LOGIN_REQUEST,
        error: error
    }
}