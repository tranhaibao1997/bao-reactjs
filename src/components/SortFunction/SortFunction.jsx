import React,{useContext,useEffect} from 'react'
import { ThemeContext } from '../../ThemeContext';

function SortFunction(props) 
{
  useEffect(() => {
    props.getProductList();

  }, [])
  console.log(props.data,"from sort")

  var newProducts = [...props.data]

  function AtoZ() {

    props.getProductListBySort(newProducts.sort((a, b) => a.name.localeCompare(b.name)));
  
  }
  function ZtoA() {
    
    props.getProductListBySort(newProducts.sort((a, b) => b.name.localeCompare(a.name)));
   
  }
  function LowToHigh() {
    
    props.getProductListBySort(newProducts.sort((a, b) => a.final_price-b.final_price));
   
  }
  function HighToLow() {

    props.getProductListBySort(newProducts.sort((a, b) => b.final_price-a.final_price));
   
  }
  function TopSales() {

 props.getProductListBySort(newProducts.filter(a => a.promotion_percent >35));
 console.log(newProducts.filter(a => a.promotion_percent >50))
   }
  

 
  

  return (


    <div className="shop-widget">
      <h3 className="shop-title">SHOP BY</h3>
      <ul className="shop-link">
        <li onClick={AtoZ}><a href="#">Name: A-Z</a></li>
        <li onClick={ZtoA}><a href="#">Name: Z-A</a></li>
        <li onClick={HighToLow}><a href="#">Price: High to Low</a></li>
        <li onClick={LowToHigh}><a href="#">Price: Low to High</a></li>
        <li onClick={TopSales}><a href="#">Product: Top Sales</a></li>
      </ul>
    </div>


  )
}

export default SortFunction