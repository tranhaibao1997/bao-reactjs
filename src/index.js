import React, { Context } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import firebaseInit from './firebase'
import ThemeContextComponent from './ThemeContext';
import { Provider } from "react-redux"
import { store } from './App.store'

firebaseInit();
ReactDOM.render(<ThemeContextComponent >
    <
        Provider store={store} > < Main /> </Provider> </ThemeContextComponent > , document.getElementById('root'));
serviceWorker.register();

//    event for cart
        var cartBtn = document.getElementById("cart-on-website");
        var miniCart = document.getElementById("minicart");
        var divbu = document.getElementById("div-bu");
        var body = document.getElementById("body");
        var closeCartBtn = document.getElementById("close-cart-btn")
        cartBtn.addEventListener("click", function() {
            miniCart.classList.add("show-up");
            divbu.classList.add("show-up1")
            body.classList.add("show-up2")

        })
        closeCartBtn.addEventListener("click", function() {
            miniCart.classList.remove("show-up");
            divbu.classList.remove("show-up1")
            body.classList.remove("show-up2");


        })

        //


        //event for favorite
        var FavoritetBtn = document.getElementById("favorite");
        var FavoriteCart = document.getElementById("favorite-cart");
        var divbu = document.getElementById("div-bu");
        var body = document.getElementById("body");
        var closeFavorite = document.getElementById("close-favorite-btn");
        var checkoutbtn = document.getElementById("checkout")
        FavoritetBtn.addEventListener("click", function() {
            FavoriteCart.classList.add("show-up");
            divbu.classList.add("show-up1")
            body.classList.add("show-up2")

        })
        closeFavorite.addEventListener("click", function() {
            FavoriteCart.classList.remove("show-up");
            divbu.classList.remove("show-up1")
            body.classList.remove("show-up2");


        })
        checkoutbtn.addEventListener("click", function() {
            miniCart.classList.remove("show-up");
            divbu.classList.remove("show-up1")
            body.classList.remove("show-up2");


        })