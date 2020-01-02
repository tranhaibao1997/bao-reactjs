import React, { useState } from 'react'
import HeaderContainer from './components/Header/Header.container'
import Footer from './components/Footer/Footer'
import SideBar from './components/Sidebar/Sidebar'
import ProductList from './components/ProductList/ProductList'
import Layout from './components/Layout/Layout'
// import Cart from './components/Cart/Cart'
import FallingLeaf from './components/FallingLeaf/FallingLeaf'

import { BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from './components/Loading/Loading'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ProductListContainer from './components/ProductList/ProductList.container'
import CartContainer from  './components/Cart/Cart.container'


const HomePage = React.lazy(() => import('./components/Layout/Layout'))
const LoginPage = React.lazy(() => import('./components/Login/Login.container'))
const DetailPage = React.lazy(() => import('./components/ProductDetail/ProductDetail.container'))
const RegisterPage = React.lazy(() => import("./components/Register/Register.container"))
const CheckoutPage = React.lazy(() => import('./components/Checkout/Checkout.container'))
const NotFoundPage = React.lazy(() => import('./components/NotFound/NotFound'))



function Main() {

    return (
        <BrowserRouter>
        
            <div>
                <HeaderContainer >
                
                    
                </HeaderContainer>
                <div id="div-bu">

                </div>
                <CartContainer></CartContainer>
                <React.Suspense fallback={<Loading/>}>
               <Switch>
               <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
                     
                   
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/" exact>
                    <Layout>
                        <ProductListContainer ></ProductListContainer>
                        <SideBar></SideBar>
                    </Layout>
                    </Route>
                    <Route path="/product-detail/:id" component={DetailPage}/>
                    
                    <PrivateRoute path="/check-out" >
                    <CheckoutPage></CheckoutPage>
                    </PrivateRoute>
                    <Route path="*">
                    {NotFoundPage}
                    </Route>

                    

                    {/* <Login></Login> */}
                 
                </Switch>
                </React.Suspense>

                <Footer></Footer>

            </div>
            
           
        </BrowserRouter>


    )

}


export default Main