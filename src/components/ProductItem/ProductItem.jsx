import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext';

function ProductItem({name, price, final_price, img_url, shop_name}) {

  const context = useContext(ThemeContext);
  function showItemDetail() {
     const value={name, price, final_price, img_url, shop_name};
     context.setItemDetail(value);
    

  }
  function addToCart() {
    
    const value = { name, price, final_price, img_url, shop_name };
    if (context.cartItem.length === 0) {
      value.quantity = 1;
      context.setCartItem([...context.cartItem, value])

    }
    else {
      let i = context.cartItem.findIndex(a => a.name === value.name)
      if (i !== -1) {
        const newProductsArray = [...context.cartItem];
        newProductsArray[i].quantity += 1;
        context.setCartItem(newProductsArray);
}
      else {
        value.quantity = 1;
        context.setCartItem([...context.cartItem, value])
      }
    }
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
            <a title="Quick View" onClick={showItemDetail} >
              <i className="fas fa-search" />
            </a>
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
              <span>{final_price}đ</span>
              <span className="old-price">{price}đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ProductItem