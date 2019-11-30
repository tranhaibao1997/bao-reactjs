import React from "react";

export function ProductImage(props)
{ return(
<div class="product-Image">
<div className="image-container">
        <img src={props.src} alt="" />
      </div>
      <div className="sale-tag">
        <p>{props.saleText}%</p>
      </div>
      </div>
)
}


export  function ProductInfo(props)
{ return(
<div class="item-info">

<p class="item-category">{props.type}</p>
<p class="item-name">{props.name}</p>
<div class="item-price">
  <p>{props.finalPrice}đ</p>
  <p id="break-through">{props.price}đ</p>
</div>
</div>
)
}

