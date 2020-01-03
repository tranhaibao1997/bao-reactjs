import React, { useState, useContext } from 'react'
import firebase from 'firebase';
import { ThemeContext } from '../../ThemeContext';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function Header(props) {
    const context = useContext(ThemeContext)
    const [userInfo, setUserInfo] = useState({})
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUserInfo(user)
            console.log(user, "user")
        }
    });

    const onLogout = async () => {
        await firebase.auth().signOut()
        window.location.href = "/"
    }
    function switchTheme() {
        context.switchTheme();

    }
    function showClock() {
        context.startTime();
    }
   

    const userEmail = userInfo && userInfo.email
    return (
        <header >

            <div id="header-sticky" className="header-area box-90 sticky-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                            <div className="logo">
                                <Link to="/"><img src="./assets/logo_shop.png" alt="" /></Link>
                            </div>
                            <div className="category-menu">
                                <h4>Category</h4>
                                <ul>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Chair</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Men</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Women</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
                                    <li><a href="#"><i className="fas fa-shopping-cart"></i> Trend</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                            <div className="main-menu text-center">
                                <nav id="mobile-menu" style={{ display: "block",visibility:"hidden" }} >
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="./detail.html">Product Detail</a>
                                                </li>
                                                <li>
                                                    <a href="./login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="./register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="./cart.html">Shoping Cart</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                            <div className="header-right f-right">
                                {
                                    userEmail && <span>Hello {userInfo.email}</span>
                                }
                                <ul>
                                    <li>
                                        <button id="txt" className="btn btn-danger" onClick={showClock}> Show Clock

</button>
                                    </li>
                                    <li onClick={switchTheme} className="">
                                        <a style={{ display: 'unset' }}><i className="badge badge-pill badge-dark">{context.value}</i></a>
                                    </li>
                                    <li className="search-btn">
                                        <a className="search-btn nav-search search-trigger" href="#"><i className="fas fa-search"></i></a>
                                    </li>
                                    {
                                        userEmail
                                            ? <li style={{ color: 'red' }} className="login-btn"><a onClick={onLogout}><i className="fas fa-sign-out-alt"></i></a></li>
                                            : <li className="login-btn"><Link to="/login"><i className="fas fa-user"></i></Link></li>
                                    }
                                    <li className="d-shop-cart"><a href="#" id="cart-on-website"><i className="fas fa-shopping-cart"></i> <span className="cart-count">{props.cartdata.length}</span></a>

                                    </li>
                                    <li className="favorite"><a href="#" id="favorite"><i className="fas fa-heart"></i> <span className="favorite-count">{props.favoritedata.length}</span></a>

</li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-12 d-xl-none">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header