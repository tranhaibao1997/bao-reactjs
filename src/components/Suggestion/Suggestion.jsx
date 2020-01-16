import React, { createContext } from 'react'
import { ThemeContext } from '../../ThemeContext';

function SuggestionFunction(props) {

  const context=React.useContext(ThemeContext)

function sendSuggestion(value)
{
  props.getSearchTextAction(value)
props.getProductListBySearch(value,1);
context.setCurrentPage(1);
}

    return (
        <div className="col-xl-12 col-lg-12 col-md-12 " >
      <div className="product-hint mb-40 mt-10  ">
        <span className ="product-hint-item-iphone product-hint-item"  onClick={(text) => sendSuggestion('Iphone 11')}>
        <div>  <img className="product-hint-img"src="https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn" alt=""></img></div>
        <div className ="product-hint-item-text ">Iphone 11 </div>
        </span>
        <span className ="product-hint-item-laptop product-hint-item" onClick={(text) => sendSuggestion('Laptop')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"alt=""></img></div>
        <div className ="product-hint-item-text" >Laptop </div>
 
        </span>
        <span className ="product-hint-item-watch product-hint-item" onClick={(text) => sendSuggestion('Đồng hồ')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Đồng hồ </div>
       
        </span>
        <span className ="product-hint-item-sport product-hint-item" onClick={(text) => sendSuggestion('Thể thao')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn" alt=""></img></div>
        <div className ="product-hint-item-text"  >Thể Thao </div>
        
        </span>
        <span className ="product-hint-item-womenFashion product-hint-item" onClick={(text) => sendSuggestion('Thời trang nữ')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Thời trang nữ </div>
        
        </span>
        <span className ="product-hint-item-comestic product-hint-item" onClick={(text) => sendSuggestion('Làm đẹp')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/bba68b7dc2d664748dd075d500049d72_tn"alt="" ></img></div>
        <div  className ="product-hint-item-text" >Làm đẹp </div>
        
        </span>
        <span className ="product-hint-item-bag product-hint-item" onClick={(text) => sendSuggestion('Túi xách')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Túi xách </div>
        
        </span>
        <span className ="product-hint-item-book product-hint-item" onClick={(text) => sendSuggestion('Sách')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Sách </div>
        
        </span>
        <span className ="product-hint-item-cook product-hint-item" onClick={(text) => sendSuggestion('nội trợ')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Nội trợ </div>
        
        </span>

      

      
      </div>
    </div>
    )
}
export default SuggestionFunction