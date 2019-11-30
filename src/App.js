import React from 'react';
import './App.css';

import { ProductImage, ProductInfo } from "./Item";

function App() {
    return ( <
        div className = "App" >
        <
        Item src = "http://www.tacer.biz/sites/default/files/018-Wing_Back_Chair%5B1%5D.jpg"
        saleText = "20"
        price = "230.00 USD"
        finalPrice = "119.00 USD"
        name = "Minimal Deco Furniture"
        type = "FURNITURE" >
        < /Item>

        <
        /div>

    );
}

function Item(props) {
    return ( <
        div class = "item-wrapper" >
        <
        ProductImage src = { props.src }
        saleText = { props.saleText } > < /ProductImage> <
        ProductInfo price = { props.price }
        finalPrice = { props.finalPrice }
        name = { props.name }
        type = { props.type } > < /ProductInfo> <
        /div>
    );
}


export default App;