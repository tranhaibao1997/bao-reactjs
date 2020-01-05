import React from 'react'
import { Link } from 'react-router-dom';
import formatPrice from '../../format'

function Cart(props) {
    console.log(props.data, "cart store")

    //caculate Total Price
    const total = props.data.reduce((acc, curr) => acc + (curr.final_price * curr.quantity), 0);
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




    function Test() {
        console.log(props.data, "access to cart")
    }
    return (
        <ul className="minicart" id="minicart">
            <button type="button" id="close-cart-btn" class="btn btn-outline-dark">X</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(elm => {
                            return (
                                <tr>
                                    <th scope="row" className="border-0">
                                        <div className="p-2">
                                            <img src={elm.img_url} alt="" width={100} className="img-fluid rounded shadow-sm" />
                                            <div style={{width:"70%"}}className="ml-3 d-inline-block align-middle">
                                                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{elm.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">{elm.shop_name}</span>
                                            </div>
                                        </div>
                                    </th>
                            <td className="border-0 align-middle" style={{textAlign: 'center'}}><strong>${formatPrice(elm.final_price)}</strong></td>
                            <td className="border-0 align-middle" style={{textAlign: 'center'}}><strong>{elm.quantity}</strong></td>
                                    <td className="border-0 align-middle" style={{textAlign: 'center'}}><a href="#" className="text-dark" onClick={(a)=>deleteItem(elm.name)}><i className="fa fa-trash" /></a></td>
                                </tr>
                            )

                        }
                        )

                    }

                </tbody>
            </table>
            <div class="check-out-part">
                <li style={{ borderTop: '1px solid darkgray' }}>
                    <div className="total-price">
                        <span className="f-left">Total:</span>
                        <span className="f-right">${formatPrice(total)}</span>
                    </div>
                </li>
                <li>
                    <div className="checkout-link">
                        <Link id="checkout" to="/check-out">Shopping Cart</Link>
                        <a className="red-color" href="#" onClick={Test}>Checkout</a>
                    </div>


                </li>
            </div>
        </ul>
    )
}


export default Cart