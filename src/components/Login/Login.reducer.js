import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Login.action"

const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state,
                loading: false,
                error: action.error

            }
        case LOGIN_SUCCESS:
            return {...state,
                load: false,
                data: action.payload
            }
        case LOGIN_FAIL:
            return {...state,
                load: true,
                error: action.error
            }

        default:
            return state
    }
}