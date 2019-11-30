import React from 'react';
import './App.css';

import { ProductImage, ProductInfo } from "./Item";
import data from "./product.json"

function App() {
  const productList = data.data;
  return (
    <div className="App">
      {productList.map(elm => (
        <      div class="item-wrapper">
          <ProductImage src={elm.img_url} saleText={elm.promotion_percent}></ProductImage>
          <ProductInfo price={elm.price} finalPrice={elm.final_price} name={elm.name} type={elm.shop_name}></ProductInfo>

    </div>
      ))}
        
    </div>
  )





}




export default App;
