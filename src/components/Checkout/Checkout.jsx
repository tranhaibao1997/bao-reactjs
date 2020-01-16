import React from 'react'

import { Link } from 'react-router-dom';
import formatPrice from '../../format'
import { coupons } from "../../coupons.js"
import { useToasts, ToastProvider } from 'react-toast-notifications'




export default function CheckOut(props) {

  //caculate Total Price
  React.useEffect(

    () => {
    
    props.getCartTotalSuccess(total)  
      
    }
    
    , [])

  
  const [coupon, setCounpon] = React.useState();
  const [disableClasses, setDisableClasses] = React.useState(false)
 
  var total=(props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0)*(100-props.coupon.value))/100
  const { addToast } = useToasts()
  function showAlertSuccess() {
    addToast("Đã áp dụng mã giảm giá", {
      appearance: 'success',
      autoDismiss: true, autoDismissTimeout: 2000
    })
  }
  function showAlertFail() {
    addToast("Chưa có mã giảm giá được chọn", {
      appearance: 'error',
      autoDismiss: true, autoDismissTimeout: 2000
    })
  }
 
  async function deleteItem(value) {
    var newArray = [...props.data]
    for (let i = 0; i < newArray.length; i++) {
      if (i === value) {
        newArray.splice(i, 1);
      }
    }


    await props.getCartSuccess(newArray);
    
    props.getCartTotalSuccess((newArray.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0) *  (100-props.coupon.value)) / 100);
    console.log(props.total)
  }
  function minus(value) {

    var newArray = [...props.data]
    if (newArray[value].cartQuantity > 0) {
      newArray[value].cartQuantity--;
      props.getCartSuccess(newArray);
      console.log(props.data)
      props.getCartTotalSuccess((props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0) *  (100-props.coupon.value)) / 100);
    }
    else {
      newArray[value].cartQuantity = 0;
      props.getCartSuccess(newArray);
      props.getCartTotalSuccess((props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0) *  (100-props.coupon.value)) / 100);
    }


  }
  function plus(value) {
    var newArray = [...props.data]
    newArray[value].cartQuantity++;
    props.getCartSuccess(newArray);
    props.getCartTotalSuccess((props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0) *  (100-props.coupon.value)) / 100);
  }

  function couponInputChange(e) {

    setCounpon(e.target.value)

  }
  async function applyCoupon() {

    console.log(coupon)
    if(coupon==="--Choose a promo coupon--" || coupon===undefined)
    {
       showAlertFail();
    }
    else
    {
    let i = coupons.findIndex(elm => elm.name === coupon);
    props.getCartAfterCouponSuccess(coupons[i]);
    props.getCartTotalSuccess((props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0) * (100 - coupons[i].value)) / 100);
    showAlertSuccess()
    }
    // setTotal((props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0) * 50) / 100);


    // setDisableClasses(true);
  }





  return (
    <div>
      <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
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
                        <th className="product-cartQuantity">cartQuantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        props.data.map((elm, key) => {
                          return (
                            <tr key={key}>
                              <td className="product-thumbnail"><Link to={`/product-detail/${elm.product_id}`}><img src={`https://media3.scdn.vn${elm.images[0]}`} alt="" /></Link></td>
                              <td className="product-name"><a href="#">{elm.name}</a></td>
                              <td className="product-price"><span className="amount">{formatPrice(elm.final_price)}</span></td>
                              <td className="product-cartQuantity">
                                <div className="cart-plus-minus">
                                  <input type="text" id="cartQuantity-input" value={elm.cartQuantity} />
                                  <div className={disableClasses === true ? "dec qtybutton disable" : "dec qtybutton"} onClick={(e) => minus(key)}>-</div>
                                  <div className={disableClasses === true ? "inc qtybutton disable" : "inc qtybutton"} onClick={(e) => plus(key)}>+</div></div>
                              </td>
                              <td className="product-subtotal"><span className="amount">{formatPrice(elm.final_price * elm.cartQuantity)}</span></td>
                              <td className={disableClasses === true ? "product-remove disable" : "product-remove"}><a onClick={(e) => deleteItem(key)}><i className="fa fa-times" /></a></td>
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

                        <p>Chọn Coupon Giảm Giá:</p>
                        <div style={{ display: 'flex' }}>
                          <div style={{ display: 'flex' }}>
                            <select class="selectpicker" onChange={couponInputChange}>
                              <option selected>--Choose a promo coupon--</option>
                              {

                                coupons.map((elm, key) => {
                                  return (
                                  <option value={elm.name}>{elm.name}- Mã giảm {elm.value}%</option>
                                  )
                                })
                              }
                            </select>


                          </div>
                          <button className="btn theme-btn-2" name="apply_coupon" onClick={applyCoupon} type="button" disabled={disableClasses}>Apply coupon</button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        {
                          props.coupon.name!=null
                          ?<li>Sale <span>{props.coupon.value}%</span></li>
                          :<li>Sale <span>Chưa có mã giảm được chọn</span></li>
                          
                        }
                        <li>Total <span>{formatPrice(props.total)}đ</span></li>
                      </ul>

                      <Link className="btn theme-btn" id="paypal-button-container" to="/payment">Proceed to checkout</Link>
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