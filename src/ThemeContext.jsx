import React, { useState } from 'react';
import data from './data.json'


export const ThemeContext = React.createContext("");
function ThemeContextComponent({ children }) {


    //Product
    const [products, setProducts] = useState(data.data);

    //cart
    const [cartItem, setCartItem] = useState([]);
    const [cartTotal,setCartTotal]=useState(0);

    //user
    const [userInfo, setUserInfo] = useState();

    const [waitForLogin_checkout, setWaitForLogin_checkout] = useState(false);

    //product detail    
    // const [itemDetail, setItemDetail] = useState([]);
    
    
    //make clock
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }




    //switch background-color
    const [themeValue, setThemeValue] = useState("black");
    function switchTheme() {
        if (themeValue === "black") {
            setThemeValue("white")
        }
        else {
            setThemeValue("black")
        }
    }
    //switch background-color
    return (
        <ThemeContext.Provider value={{
            switchTheme, value: themeValue,
            startTime,
            products, setProducts,
            cartItem, setCartItem,
            userInfo, setUserInfo,
            cartTotal,setCartTotal
            // itemDetail, setItemDetail

        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextComponent
