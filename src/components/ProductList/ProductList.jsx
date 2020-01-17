import React, { useContext, useEffect } from 'react'
import ProductItemContainer from '../ProductItem/ProductItem.container'
import { ThemeContext } from '../../ThemeContext';
import SuggestionFunctionContainer from '../Suggestion/Suggestion.container';
import NotFound from '../NotFound/NotFound';
import SuggestionFunction from '../Suggestion/Suggestion.container';
import Slider from "react-slick";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import Loading from '../Loading/Loading';







function ProductList(props) {
  // useEffect(() => {
  //   props.getProductList();

  // }, [])

  const totalPage=props.metadata.total_page
  const context=useContext(ThemeContext)
 
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const changeCurrentPage = numPage => {
    context.setCurrentPage(numPage)
    console.log(numPage)
    props.getProductList(props.searchText,numPage);
    
    // props.getProductListBySearch(numPage)
    //fetch a data  
    //or update a query to get data
  };

  // console.log(props.metadata.meta_data.total_page)


  return (
    <>
      {}


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
          <div className="col-xl-7 col-lg-6 col-md-6">
            <Pagination
              currentPage={context.currentPage}
              totalPages={totalPage}
              changeCurrentPage={changeCurrentPage}
              theme="square-fill"
            />

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
                  : <Loading></Loading>


                  }
              





            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList