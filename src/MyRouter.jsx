import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideBar from './components/Sidebar/Sidebar'
import ProductList from './components/ProductList/ProductList'
import Layout from './components/Layout/Layout'
import data from './data.json'
import Cart from './components/Cart/Cart'
import Loader from './components/Loader/Loader'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { BrowserRouter } from 'react-router-dom';
import { Router, Route } from "react-router";
import Main from './Main'


function MyRouter() {

    return (
        <BrowserRouter>
    <div>
      
    {/* <Route path="/home" component={Main}/> */}
    <Route path="/register" component={Register} />
    {/* <Route path="/register" component={Header} />
    <Route path="/login" component={Header} /> */}
    <Route path="/login" component={Login} />
    


    
    </div>
  </BrowserRouter>
       

    )

}


export default MyRouter