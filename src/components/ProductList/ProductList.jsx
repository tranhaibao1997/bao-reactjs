import React, { useContext, useEffect } from 'react'
import ProductItemContainer from '../ProductItem/ProductItem.container'
import { ThemeContext } from '../../ThemeContext';
import SuggestionFunctionContainer from '../Suggestion/Suggestion.container';
import NotFound from '../NotFound/NotFound';
import SuggestionFunction from '../Suggestion/Suggestion.container';
import Slider from "react-slick";


function ProductList(props) {
  useEffect(() => {
    props.getProductList();


  }, [])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  
 console.log(props.data,"mang productlist")

  return (
    <>
   

  
    <div className="col-xl-9 col-lg-8">
         
   <Slider
      {...settings} >
      <div class="item"><img src="https://cdn.tgdd.vn/2020/01/banner/800-300-800x300-1.gif" alt=""></img></div>
      <div class="item"><img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/T_T-iPHONE-7-PLUS---1600x600.png" alt=""></img></div>
      <div class="item"><img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/T_T-LAPTOP---1600x600.png" alt=""></img></div>
      <div class="item"><img src="https://cdn.tgdd.vn/2020/01/banner/800-300-800x300-1.gif" alt=""></img></div>

    
  </Slider>
    <SuggestionFunction></SuggestionFunction>
      {/* tab filter */}
      <div className="row mb-10">
        
        <div className="col-xl-5 col-lg-6 col-md-6">
          <div className="product-showing mb-40">
            <p>Showing {props.data.length} results</p>
          </div>
        </div>
       
      </div>
      {/* tab content */}
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row">

            {
              props.data


                ? props.data.map(elm => {
                  return <ProductItemContainer
                    {...elm}
                  ></ProductItemContainer>
                })
                : [].map(elm => {
                  return <ProductItemContainer
                    {...elm}
                  ></ProductItemContainer>


            })
          }
          
        

          

          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default ProductList