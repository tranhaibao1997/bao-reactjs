import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';

function Cart() {
    const context = useContext(ThemeContext);

    //caculate Total Price
    const total = context.cartItem.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    //caculate Total Price

    function deleteItem(value) {
        var newArray = [...context.cartItem]
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].name === value) {
                newArray.splice(i, 1);
            }
        }
        context.setCartItem(newArray);
        console.log(newArray)



    }


    return (
        <ul className="minicart">
            {
                context.cartItem.map(elm => {
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

            <li>
                <div className="total-price">
                    <span className="f-left">Total:</span>
                    <span className="f-right">${total}</span>
                </div>
            </li>
            <li>
                <div className="checkout-link">
                    <Link to="/check-out">Shopping Cart</Link>
                    <a className="red-color" href="#">Checkout</a>
                </div>
            </li>
        </ul>
    )
}


export default Cart