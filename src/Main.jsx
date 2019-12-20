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
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail'
import FallingLeaf from './components/FallingLeaf/FallingLeaf'
import NotFound from './components/NotFound/NotFound'
import CheckOut from './components/Checkout/Checkout'



function Main() {

    return (
        <BrowserRouter>
            <div>


                <Header >
                    <Cart></Cart>
                </Header>
                {/* <Loader></Loader>
                <FallingLeaf></FallingLeaf> */}
                
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/" exact>
                    <Layout>
                        <ProductList ></ProductList>
                        <SideBar></SideBar>
                    </Layout>
                    </Route>
                    <Route path="/product-detail/:id">
                        <ProductDetail/>
                    </Route>
                    <Route path="/check-out">
                      <CheckOut></CheckOut>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>

                    

                    {/* <Login></Login> */}
                 
                </Switch>
                

                <Footer></Footer>

            </div>
        </BrowserRouter>


    )

}


export default Main