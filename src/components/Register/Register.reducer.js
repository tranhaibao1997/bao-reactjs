import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from './Register.action'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_FAIL:
            return {
                ...state,
                loading: true
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case REGISTER_REQUEST:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}