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
import MyRouter from './MyRouter'
import ProductDetail from './components/ProductDetail/ProductDetail'
import FallingLeaf from './components/FallingLeaf/FallingLeaf'


function Main() {

    return (
        <div>
            <Header >
                <Cart></Cart>
            </Header>
            <Loader></Loader>
            <FallingLeaf></FallingLeaf>
            {/* <MyRouter></MyRouter>  */}
            {/*      */}
            {/* <Login></Login> */}
            <Layout>
                <ProductList ></ProductList>
                <SideBar></SideBar>
            </Layout>
            <ProductDetail></ProductDetail>
            <Footer></Footer>

        </div>



    )

}


export default Main