import React from 'react'
import { Link } from 'react-router-dom'
import formatPrice from '../../format'

function ProductItem({ name, price, final_price, img_url, shop_name, product_id,data,getCartSuccess }) {

  
  const cart = [...data];
  function addToCart() {

    const value = { name, price, final_price, img_url, shop_name };

    let i = cart.findIndex(a => a.name === value.name)
    if (i !== -1) {
      const newProductsArray = [...data];
      newProductsArray[i].quantity += 1;
      getCartSuccess(newProductsArray);
    }
    else {
      value.quantity = 1;
      getCartSuccess([...cart, value])
    }

    console.log(cart);

  }



  return (

    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={img_url} alt="" />

          </a>
          <div className="product-action text-center">
            <a title="Shopping Cart" onClick={addToCart}>
              <i className="fas fa-shopping-cart" />
            </a>
            <Link to={`/product-detail/${product_id}`} title="Quick View">
              <i className="fas fa-search" />
            </Link>
          </div>
        </div>
        <div className="product-content pr-0">
          <div className="pro-cat mb-10">
            <a href="#">{shop_name}</a>
          </div>
          <h4>
            <a href="#">{name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{formatPrice(final_price)}đ</span>
              <span className="old-price">{price}đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductItem