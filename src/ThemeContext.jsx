import React, { useState } from 'react';
import data from './data.json'


export const ThemeContext = React.createContext("");
function ThemeContextComponent({ children }) {


//Product
const [products,setProducts]= useState(data.data);







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
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }




    //switch background-color
    const [themeValue, setThemeValue] = useState("white");
    function switchTheme() {
        if (themeValue === "white") {
            setThemeValue("black")
        }
        else {
            setThemeValue("white")
        }
    }
    //switch background-color

    function recieveUser(value)
    {
       console.log(value);
    }
    return (
        <ThemeContext.Provider value={{ switchTheme, value: themeValue, startTime,products,setProducts}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextComponent
