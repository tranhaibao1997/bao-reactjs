import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

function Cart(props) {
    console.log(props.data, "cart store")
   
    //caculate Total Price
    const total = props.data.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    //caculate Total Price

    function deleteItem(value) {
        var newArray = [...props.data]
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].name === value) {
                newArray.splice(i, 1);
            }
        }
        
        props.getCartSuccess(newArray);
    }




    function Test()
    {
        console.log(props.data,"access to cart")
    }
    return (
        <ul className="minicart" id="minicart">
            <button type="button" id="close-cart-btn" class="btn btn-outline-dark">X</button>
            {   
                props.data.map(elm => {
                    return (
                        <li>
                            <div className="cart-img">
                                <a href="#">
                                    <img src={elm.img_url} alt="" />
                                </a>
                            </div>
                            <div className="cart-content">
                                <h3>
                                    <a href="#">{elm.name}  <span style={{ color: 'red' }}>X {elm.quantity}</span></a>
                                </h3>
                                <div className="cart-price">
                                    <span className="new">${elm.price}</span>
                                    <span>
                                        <del>${elm.final_price}</del>
                                    </span>
                                </div>
                            </div>
                            <div className="del-icon">
                                <a onClick={(e) => deleteItem(elm.name)}>
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </div>
                        </li>
                    )
                })
            }
             <div class="check-out-part">
            <li style={{borderTop: '1px solid darkgray'}}>
                <div className="total-price">
                    <span className="f-left">Total:</span>
                    <span className="f-right">${total}</span>
                </div>
            </li>
            <li>
                <div className="checkout-link">
                    <Link to="/check-out">Shopping Cart</Link>
                    <a className="red-color" href="#" onClick={Test}>Checkout</a>
                </div>
                

            </li>
            </div>
        </ul>
    )
}


export default Cart