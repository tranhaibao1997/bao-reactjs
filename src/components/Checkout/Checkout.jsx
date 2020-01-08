import React from 'react'

import { Link } from 'react-router-dom';
import formatPrice from '../../format'



export default function CheckOut(props) {

  //caculate Total Price
  React.useEffect(() => {
    if (props.data.length === 0) {
      alert("Bạn chưa có gì trong giỏ hàng. Bạn có muốn ra trang chủ để xem hàng không ?")
      window.location.href = "/"
    }
    else {

    }

  })  
  const [couponInput,setCounponInput]=React.useState("");
  const [disableClasses,setDisableClasses]=React.useState(false)
  const [total, setTotal] = React.useState(props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0))
  //caculate Total Price
  async function deleteItem(value) {
    var newArray = [...props.data]
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name === value) {
        newArray.splice(i, 1);
      }
    }


    await props.getCartSuccess(newArray);
    console.log(newArray,"mang cart sau khi xoa")
    await setTotal(newArray.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0));

  }
  function minus(value) {
    let i = props.data.findIndex(a => a.name === value);
    const newArray = [...props.data];
    if (newArray[i].cartQuantity > 0) {
      newArray[i].cartQuantity--;
    }
    else {
      deleteItem(newArray[i].name);
    }


    props.getCartSuccess(newArray);
    setTotal(props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0));
  }
  function plus(value) {
    let i = props.data.findIndex(a => a.name === value);
    const newArray = [...props.data];
    newArray[i].cartQuantity++;
    props.getCartSuccess(newArray);
    setTotal(props.data.reduce((acc, curr) => acc + (curr.final_price * curr.cartQuantity), 0));
  }

  function couponInputChange(e)
  {
    
    setCounponInput(e.target.value)
  }
  function applyCoupon() {
    let coupon=couponInput;
    console.log(coupon);
    if (!coupon) {
      alert("Mời bạn nhập code")
    }
    else {
      if (coupon === "REACT") {
      
        alert("Giỏ hàng hiện tại dc giảm 50% giá trị")
        setTotal(total / 2);
        setDisableClasses(true);
        }
      else {
        alert("Sai code rồi nha ahihihihihihihihih")
      }

    }

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
                        props.data.map(elm => {
                          return (
                            <tr>
                              <td className="product-thumbnail"><Link to={`/product-detail/${elm.product_id}`}><img src={`https://media3.scdn.vn${elm.images[0]}`} alt="" /></Link></td>
                              <td className="product-name"><a href="#">{elm.name}</a></td>
                              <td className="product-price"><span className="amount">{formatPrice(elm.final_price)}</span></td>
                              <td className="product-cartQuantity">
                                <div className="cart-plus-minus">
                                  <input type="text" id="cartQuantity-input" value={elm.cartQuantity} />
                                  <div className={disableClasses===true ?"dec qtybutton disable" :"dec qtybutton"} onClick={(e) => minus(elm.name)}>-</div>
                                  <div className={disableClasses===true ?"inc qtybutton disable" :"inc qtybutton"} onClick={(e) => plus(elm.name)}>+</div></div>
                              </td>
                              <td className="product-subtotal"><span className="amount">{formatPrice(elm.final_price * elm.cartQuantity)}</span></td>
                              <td className={disableClasses===true ?"product-remove disable" :"product-remove"}><a onClick={(e) => deleteItem(elm.name)}><i className="fa fa-times" /></a></td>
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

                        <p>Nhập "REACT" để dc giảm 50%. Nếu bạn đã áp dụng coupon, vui lòng không chỉnh sửa giỏ hàng do chưa code tới bước đó :(</p>
                        <input id="coupon_code" className="input-text" name="coupon_code" placeholder="Coupon code" type="text" onChange={couponInputChange} readOnly={disableClasses}  />
                        <button className="btn theme-btn-2" name="apply_coupon" onClick={applyCoupon} type="button" disabled={disableClasses}>Apply coupon</button>
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
                        <li>Subtotal <span>{formatPrice(total)}đ</span></li>
                        <li>Total <span>{formatPrice(total)}đ</span></li>
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