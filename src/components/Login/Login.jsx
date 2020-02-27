import React, { useState,useContext } from 'react'
import firebase from 'firebase'
// import {Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { BrowserRouter, Switch, Route, Link, useLocation, useHistory } from "react-router-dom";


function Login(props) {
  const theme = useContext(ThemeContext)
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [errorMgs, setErrorMgs] = useState("");
    const location = useLocation()
    let history = useHistory();
    function handleChange1(event) {
      setEmail(event.target.value)
    }
    function handleChange2(event) {
      setPass(event.target.value)
    }
  //   const Login = async (event) => {
  //     event.preventDefault();
  //     try {
  //       console.log(email,password)
  //       await firebase.auth().signInWithEmailAndPassword(email, password);
  //       console.log("Dang nhap thanh cong");
  //       setErrorMgs("");
  //     }
  //     catch(error){
  // setErrorMgs(error.message)
  //     }

  // }
  async function Login(e)
  {
    e.preventDefault();
   await props.loginAction(email,password);
   let { from } = location.state || { from: { pathname: "/" } };
   history.replace(from);
  }
  const textColor = theme.value === 'black' ?  "white" : 'black'


  return (

    <section style={{ backgroundColor: textColor }} className="login-area pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="basic-login">
            <h3 className="text-center mb-60">Login From Here</h3>
            <form onSubmit={Login}>
              <label htmlFor="name">Email Address <span>**</span></label>
              <input onChange={handleChange1} id="name" type="text" placeholder="Enter Username or Email address..." value="testaccount@gmail.com" />
              <label htmlFor="pass">Password <span>**</span></label>
              <input onChange={handleChange2} id="pass" type="password" placeholder="Enter password..." value="123456" />
              <div className="login-action mb-20 fix">
                <span className="log-rem f-left">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me!</label>
                </span>
                <span className="forgot-login f-right">
                  <a href="#">Lost your password?</a>
                </span>
              </div>
              <button type="submit"className="btn theme-btn-2 w-100">Login Now</button>
               <div className="or-divide"><span>or</span></div>
             <Link to="/register"> <button className="btn theme-btn w-100">Register Now</button></Link>
             
             
           

            
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Login