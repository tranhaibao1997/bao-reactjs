import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import firebase from 'firebase'

export default function PrivateRoute(props){
    const RenderChildren=firebase.auth().currentUser
    ? props.children
    :<Redirect to="/login"/>
    return (
       
        <Route path={props.path}>
        {RenderChildren}
        </Route>
    )
}