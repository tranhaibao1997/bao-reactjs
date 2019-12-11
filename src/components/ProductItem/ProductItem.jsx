import React from 'react'

function ProductItem({ img_url, shop_name, name, price, final_price, addItemName }) {

 const addItemNameItem=() =>
{
  addItemName({name,price,final_price,img_url});
}

  return (

    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={img_url} alt="" />
         
          </a>
          <div className="product-action text-center">
            <a title="Shopping Cart" onClick={addItemNameItem} >
              <i className="fas fa-shopping-cart" />
            </a>
            <a title="Quick View" >
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