import React,{useContext} from 'react'
import { ThemeContext } from '../../ThemeContext';

function SortFunction() 
{
  const context = useContext(ThemeContext)
  var newProducts = [...context.products]

  function AtoZ() {

    context.setProducts(newProducts.sort((a, b) => a.name.localeCompare(b.name)));
  
  }
  function ZtoA() {
    
    context.setProducts(newProducts.sort((a, b) => b.name.localeCompare(a.name)));
   
  }
  function LowToHigh() {
    
    context.setProducts(newProducts.sort((a, b) => a.price-b.price));
   
  }
  function HighToLow() {

    context.setProducts(newProducts.sort((a, b) => b.price-a.price));
   
  }

 
  

  return (


    <div className="shop-widget">
      <h3 className="shop-title">SHOP BY</h3>
      <ul className="shop-link">
        <li onClick={AtoZ}><a href="#">Name: A-Z</a></li>
        <li onClick={ZtoA}><a href="#">Name: Z-A</a></li>
        <li onClick={HighToLow}><a href="#">Price: High to Low</a></li>
        <li onClick={LowToHigh}><a href="#">Price: Low to High</a></li>
        <li><a href="#">Product: Top Sales</a></li>
      </ul>
    </div>


  )
}

export default SortFunction