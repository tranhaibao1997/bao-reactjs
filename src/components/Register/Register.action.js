import firebase from 'firebase'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export function registerRequestAction() {
    return {
        type: REGISTER_REQUEST
    }
}

export function registerSuccessAction(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload: payload
    }
}

export function registerFailAction(error) {
    return {
        type: REGISTER_FAIL,
        error: error
    }
}


export const registerAction = (email, password) => {

    // REQUEST -LOADING
    // call api
    // => SUCCESS - DATA - 
    // => FAIL - ERROR
    return async(dispatch) => {
        dispatch(registerRequestAction())
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch(registerSuccessAction(result))
        } catch (error) {
            dispatch(registerFailAction(error))
        }
    }
}