import firebase from 'firebase'
import { Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export const LOGIN_REQUEST = "LOGIN-REQUEST"
export const LOGIN_SUCCESS = "LOGIN-SUCCESS"
export const LOGIN_FAIL = "LOGIN-FAIL"

export function loginRequestAction() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccessAction(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export function loginFailAction(error) {
    return {
        type: LOGIN_FAIL,
        error: error
    }
}
// store.dispatch(loginSuccessAction());
export const loginAction = (email, password) => {
    return async(dispatch) => {
        dispatch(loginRequestAction())
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSuccessAction(result));
            return result

        } catch (error) {
            dispatch(loginFailAction(error))
        }
    }
}