import React, { createContext } from 'react'
import { ThemeContext } from '../../ThemeContext';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SuggestionFunction(props) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const context = React.useContext(ThemeContext)

  function sendSuggestion(value) {
    props.getSearchTextAction(value)
    props.getProductListBySearch(value, 1);
    context.setCurrentPage(1);
    window.scrollTo(0, 550);
  }

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 " >

      <Carousel responsive={responsive}>
        <span className="product-hint-item-iphone product-hint-item" onClick={(text) => sendSuggestion('Iphone 11')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn" alt=""></img></div>
          <div className="product-hint-item-text ">Iphone 11 </div>
        </span>
        <span className="product-hint-item-laptop product-hint-item" onClick={(text) => sendSuggestion('Laptop')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Laptop </div>

        </span>
        <span className="product-hint-item-watch product-hint-item" onClick={(text) => sendSuggestion('Đồng hồ')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Đồng hồ </div>

        </span>
        <span className="product-hint-item-sport product-hint-item" onClick={(text) => sendSuggestion('Thể thao')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn" alt=""></img></div>
          <div className="product-hint-item-text"  >Thể Thao </div>

        </span>
        <span className="product-hint-item-womenFashion product-hint-item" onClick={(text) => sendSuggestion('Thời trang nữ')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Thời trang nữ </div>

        </span>
        <span className="product-hint-item-comestic product-hint-item" onClick={(text) => sendSuggestion('Làm đẹp')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/bba68b7dc2d664748dd075d500049d72_tn" alt="" ></img></div>
          <div className="product-hint-item-text" >Làm đẹp </div>

        </span>
        <span className="product-hint-item-bag product-hint-item" onClick={(text) => sendSuggestion('Túi xách')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Túi xách </div>

        </span>
        <span className="product-hint-item-book product-hint-item" onClick={(text) => sendSuggestion('Sách')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Sách </div>

        </span>
        <span className="product-hint-item-cook product-hint-item" onClick={(text) => sendSuggestion('xe máy')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Phương Tiện </div>

        </span>

        <span className="product-hint-item-cook product-hint-item" onClick={(text) => sendSuggestion('đồ chơi')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Đồ chơi</div>

        </span>
        <span className="product-hint-item-cook product-hint-item" onClick={(text) => sendSuggestion('sản phẩm khác')}>
          <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/12039f0db7c3f025fb0c57b3490efad2_tn" alt=""></img></div>
          <div className="product-hint-item-text" >Sản phẩm khác</div>

        </span>

      </Carousel>




    </div>
  )
}
export default SuggestionFunction