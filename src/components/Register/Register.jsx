import React, { useState } from 'react'
import firebase from 'firebase'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  

  function handleChange1(event) {
    setEmail(event.target.value)
  }
  function handleChange2(event) {
    setPass(event.target.value)
  }
  const Submit = async (event) => {
    event.preventDefault();
    try {
      console.log(email,password)
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Dang ki thanh cong")
    }
    catch(error){
console.log(error)
    }

  }

  return (

    <main>
      {/* breadcrumb-area-start */}
      <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Register</h1>
                <ul className="breadcrumb-menu">
                  <li><a href="index.html">home</a></li>
                  <li><span>Register</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      {/* login Area Strat*/}
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Signup From Here</h3>
                <form onSubmit={Submit}>

                  <label htmlFor="email-id">Email Address <span>**</span></label>
                  <input onChange={handleChange1} id="email-id" type="text" placeholder="Enter Username or Email address..." />
                  <label htmlFor="pass">Password <span>**</span></label>
                  <input onChange={handleChange2} id="pass" type="password" placeholder="Enter password..." />
                  <div className="mt-10" />
                  <button type="submit" className="btn theme-btn-2 w-100">Register Now</button>
                  <div className="or-divide"><span>or</span></div>
                  <button type="button" className="btn theme-btn w-100">login Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* login Area End*/}
    </main>

  )
}

export default Register