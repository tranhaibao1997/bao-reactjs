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


function Main() {

    //add Product to cart
    const [addProducts, setAddedProducts] = useState([])

    const addCart = (value) => {

        if (addProducts.length === 0) {
            value.quantity = 1;
            setAddedProducts([...addProducts, value])
        }
        else {
            let i = addProducts.findIndex(a => a.name === value.name)
            if (i !== -1) {

                // [...addProducts][i].quantity++;
                // setAddedProducts(addProducts);
                // console.log(addProducts[i].quantity)

                const newProductsArray = [...addProducts];
                newProductsArray[i].quantity += 1;
                setAddedProducts(newProductsArray);



            }
            else {
                value.quantity = 1;
                setAddedProducts([...addProducts, value])
            }
        }


    }

    //add Product to cart



    //caculate Total Price
    var total = addProducts.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    //caculate Total Price


    //show SortedArray and set Products = SortedArray
    const [products, setProducts] = useState(data.data)
    function showSortedArray(value) {
        console.log(value);
        setProducts(value);
    }

    return (
        
    <div>
    <Header productCount={addProducts.length}>
                <Cart products={addProducts} totalPrice={total}  ></Cart>
            </Header>
            <Loader>

            </Loader>
            <div id="container">

</div>
<MyRouter></MyRouter>
{/* <Register></Register> */}
{/* <Login></Login> */}
            <Layout>

                <ProductList addItemNamex={addCart} data={products}></ProductList>

                
                <SideBar products={products} TakeArrayToMain1={showSortedArray}></SideBar>
            </Layout>

            <Footer></Footer>

    </div>
  
       

    )

}


export default Main