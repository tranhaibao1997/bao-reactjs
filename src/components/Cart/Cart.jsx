import React from 'react'
import { Link } from 'react-router-dom';
import formatPrice from '../../format'
import { useToasts, ToastProvider } from 'react-toast-notifications'

function Cart(props) {
    console.log(props.data, "cart store")
    const { addToast } = useToasts()
    //caculate Total Price
    const total = props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0);
    //caculate Total Price
    function showAlertDelete() {
        addToast("Đã xóa", {
            appearance: 'success',
            autoDismiss: true, autoDismissTimeout: 2000
        })
    }
    function deleteItem(value) {
        var newArray = [...props.data]
        for (let i = 0; i < newArray.length; i++) {
            if (i === value) {
                newArray.splice(i, 1);
            }
        }

        props.getCartSuccess(newArray);
        showAlertDelete()
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
                        props.data.length!==0

                            ? props.data.map((elm, key) => {
                                return (
                                    <tr key={key}>
                                        <th scope="row" className="border-0">
                                            <div className="p-2">
                                                <img src={`https://media3.scdn.vn${elm.images[0]}`} alt="" width={100} className="img-fluid rounded shadow-sm" />
                                                <div style={{ width: "70%",fontFamily: '"Quicksand", sans-serif' }} className="ml-3 d-inline-block align-middle">
                                                    <h5 className="mb-0"> <a style={{fontFamily: '"Quicksand", sans-serif', color:"black"}} href="#" className="text-dark d-inline-block align-middle">{elm.name}{`(${elm.attribute1}`}{` ${elm.attribute2})`}</a></h5><span  className="text-muted font-weight-normal font-italic d-block">{elm.shop_name}</span>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="border-0 align-middle" style={{ textAlign: 'center' }}><strong>${formatPrice(elm.final_price)}</strong></td>
                                        <td className="border-0 align-middle" style={{ textAlign: 'center' }}><strong>{elm.cartQuantity}</strong></td>
                                        <td className="border-0 align-middle" style={{ textAlign: 'center' }}><a href="#" className="text-dark" onClick={(a) => deleteItem(key)}><i className="fa fa-trash" /></a></td>
                                    </tr>
                                )
                                

                            }
                            )
                            : <p style={{textAlign: 'center'}}>Chưa có gì trong giỏ hàng</p>
                    }
                    
                 

                </tbody>
            </table>
            <div class="check-out-part">
                <li style={{ borderTop: '1px solid darkgray' }}>
                    <div className="total-price">
                        <span className="">Total:</span>
                        <span className="">${formatPrice(total)}</span>
                    </div>
                </li>
                <li>
                    <div className="checkout-link">
                        <Link id="checkout" to="/check-out">Shopping Cart</Link>
                        <a className="red-color" href="#" >Checkout</a>
                    </div>


                </li>
            </div>
        </ul>
    )
}


export default Cart