import React from 'react';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        Item > < /Item> <
        /div>

    );
}

var Item = () => ( <
    div className = "item-wrapper" >
    <
    div className = "image-container" >
    <
    img className = ""
    src = "http://www.tacer.biz/sites/default/files/018-Wing_Back_Chair%5B1%5D.jpg"
    alt = "" / >
    <
    /div> <
    div className = "sale-tag" >
    <
    p > Sale < /p> <
    /div> <
    div class = "item-info" >

    <
    p class = "item-category" > FURNITURE < /p> <
    p class = "item-name" > Minimal Deco Furniture < /p> <
    div class = "item-price" >
    <
    p > $119 USD < /p> <
    p id = "break-through" > $230 USD < /p> <
    /div> <
    /div>

    <
    /div>
);


export default App;