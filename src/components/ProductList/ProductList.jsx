import React, { useContext, useEffect } from 'react'
import ProductItemContainer from '../ProductItem/ProductItem.container'
import { ThemeContext } from '../../ThemeContext';
import SuggestionFunctionContainer from '../Suggestion/Suggestion.container';
import NotFound from '../NotFound/NotFound';
import SuggestionFunction from '../Suggestion/Suggestion.container';


function ProductList(props) {
  useEffect(() => {
    props.getProductList();


  }, [])
  
 console.log(props.data,"mang productlist")

  return (
    <>
   
   
    
    <div className="col-xl-9 col-lg-8">
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