import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideBar from './components/Sidebar/Sidebar'
import ProductList from './components/ProductList/ProductList'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import FallingLeaf from './components/FallingLeaf/FallingLeaf'

import { BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from './components/Loading/Loading'


const HomePage = React.lazy(() => import('./components/Layout/Layout'))
const LoginPage = React.lazy(() => import('./components/Login/Login'))
const DetailPage = React.lazy(() => import('./components/ProductDetail/ProductDetail'))
const RegisterPage = React.lazy(() => import('./components/Register/Register'))
const CheckoutPage = React.lazy(() => import('./components/Checkout/Checkout'))
const NotFoundPage = React.lazy(() => import('./components/NotFound/NotFound'))



function Main() {

    return (
        <BrowserRouter>
        
            <div>
                <Header >
                    <Cart></Cart>
                </Header>
                <React.Suspense fallback={<Loading/>}>
               <Switch>
                    <Route path="/register" component={RegisterPage}/>
                     
                   
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/" exact>
                    <Layout>
                        <ProductList ></ProductList>
                        <SideBar></SideBar>
                    </Layout>
                    </Route>
                    <Route path="/product-detail/:id" component={DetailPage}/>
                    <Route path="/check-out" component={CheckoutPage}/>
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