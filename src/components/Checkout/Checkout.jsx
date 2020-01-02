import React from 'react'

import { Link } from 'react-router-dom';



export default function CheckOut(props) {
    
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
     function minus(value)
     {
        let i =props.data.findIndex(a => a.name === value);
        const newArray=[...props.data];
        if(newArray[i].quantity >0)
        {
            newArray[i].quantity--;
        }
        else
        {
            deleteItem(newArray[i].name);
        }
       
        
        props.getCartSuccess(newArray);
     }
     function plus(value)
     {
        let i = props.data.findIndex(a => a.name === value);
        const newArray=[...props.data];
        newArray[i].quantity++;
        props.getCartSuccess(newArray);
     }
    
    return (
        <div>
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Shoping Cart</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Cart</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                    { 
                    props.data.map(elm =>{
                        return(
                            <tr>
                            <td className="product-thumbnail"><Link to={`/product-detail/${elm.product_id}`}><img src={elm.img_url} alt="" /></Link></td>
                            <td className="product-name"><a href="#">{elm.name}</a></td>
                            <td className="product-price"><span className="amount">{elm.final_price}</span></td>
                            <td className="product-quantity">
                              <div className="cart-plus-minus">
                                  <input type="text" id="quantity-input" value={elm.quantity}  />
                                  <div className="dec qtybutton" onClick={(e)=>minus(elm.name)}>-</div>
                                  <div className="inc qtybutton" onClick={(e)=>plus(elm.name)}>+</div></div>
                            </td>
                        <td className="product-subtotal"><span className="amount">{elm.final_price * elm.quantity}</span></td>
                            <td className="product-remove"><a onClick={(e)=>deleteItem(elm.name)}><i className="fa fa-times" /></a></td>
                          </tr>
                        )
                    })
                       
}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Coupon code" type="text" />
                          <button className="btn theme-btn-2" name="apply_coupon" type="submit">Apply coupon</button>
                        </div>
                        <div className="coupon2">
                          <input className="btn theme-btn" name="update_cart" defaultValue="Update cart" type="submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>Subtotal <span>{total}đ</span></li>
                          <li>Total <span>{total}đ</span></li>
                        </ul>
                        <a className="btn theme-btn" id="paypal-button-container" href="#">Proceed to checkout</a>
                        <div id="paypal-button-container"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
          
          

    )
}