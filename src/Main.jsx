import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideBar from './components/Sidebar/Sidebar'
import ProductList from './components/ProductList/ProductList'
import Layout from './components/Layout/Layout'
import data from './data.json'
import Cart from './components/Cart/Cart'
import Loader from './components/Loader/Loader'


function Main() {

    //add Product to cart
    const [addProducts, setAddedProducts] = useState([])
    const addCart = (value) => {
        if (addProducts.find(elm => elm.name === value.name)) {
            console.log("a");
        }
        else {
            setAddedProducts([...addProducts, value])
        }
    }
    //add Product to cart


    //caculate Total Price
    const totalPrice = addProducts.reduce((total, n) => total + n.price, 0)
    //caculate Total Price


    //Get data from json file
    
    //Get data from json file

    //show SortedArray and set Products = SortedArray
    const [products, setProducts] = useState(data.data)
    function showSortedArray(value)
    {
      console.log(value);
      setProducts(value);
    }

    return (
        <>
            <Header productCount={addProducts.length}>
                <Cart products={addProducts} totalPrice={totalPrice} ></Cart>
            </Header>
<Loader>

</Loader>
            <Layout>

                <ProductList addItemNamex={addCart} data={products}></ProductList>
                <SideBar products={products} TakeArrayToMain1={showSortedArray}></SideBar>
            </Layout>

            <Footer></Footer>


        </>

    )

}


export default Main