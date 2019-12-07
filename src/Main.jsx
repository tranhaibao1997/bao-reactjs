import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideBar from './components/Sidebar/Sidebar'
import ProductList from './components/ProductList/ProductList'
import Layout from './components/Layout/Layout'
import data from './data.json'


function Main() {
    return (
        <>
        
        <Header></Header>
        <canvas id='canv'>
        </canvas>
            <Layout>
                <ProductList data={data.data}></ProductList>
                <SideBar></SideBar>
            </Layout>

            <Footer></Footer>
        
           
        </>
        
    )

}


export default Main