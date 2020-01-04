import React from 'react'
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom'
import firebase from 'firebase'

export default function PrivateRoute(props){
    let location = useLocation();
    const RenderChildren= firebase.auth().currentUser
    ? props.children
    :<Redirect
    to={{
      pathname: "/login",
      state: { from: location }
    }}
  />
    return (
       
        <Route path={props.path}>
        {RenderChildren}
        </Route>
    )
}