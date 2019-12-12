import React from 'react'

function Cart(props)
{
 
return (
        <ul className="minicart">
            {
                props.products.map(elm => {
return (
<li>
            <div className="cart-img">
                <a href="#">
                    <img src={elm.img_url} alt=""/>
                </a>
            </div>
            <div className="cart-content">
                <h3>
<a href="#">{elm.name}  <span style={{color: 'red'}}>X {elm.quantity}</span></a>
                </h3>
                <div className="cart-price">
                    <span className="new">${elm.price}</span>
                    <span>
                        <del>${elm.final_price}</del>
                    </span>
                </div>
            </div>
            <div className="del-icon">
                <a>
                    <i className="far fa-trash-alt"></i>
                </a>
            </div>
        </li>
)
                } )
            }
        
        <li>
            <div className="total-price">
                <span className="f-left">Total:</span>
                <span className="f-right">${props.totalPrice}</span>
            </div>
        </li>
        <li>
            <div className="checkout-link">
                <a href="#">Shopping Cart</a>
                <a className="red-color" href="#">Checkout</a>
            </div>
        </li>
    </ul>
    )
}


export default Cart