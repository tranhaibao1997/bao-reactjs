export const REGISTER_REQUEST = "REGISTER-REQUEST"
export const REGISTER_SUCCESS = "REGISTER-SUCCESS"
export const REGISTER_FAIL = "REGISTER-FAIL"

function registerRequestAction() {
    return {
        type: REGISTER_REQUEST
    }
}

function registerSuccessAction(payload) {
    return {
        type: REGISTER_REQUEST,
        payload: payload
    }
}

function registerFailAction(error) {
    return {
        type: REGISTER_REQUEST,
        error: error
    }
}