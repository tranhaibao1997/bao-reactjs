import React, { useState } from 'react'

function SortFunction(props) 
{
  const [sortedArray, setSort] = useState(props.products);

  function AtoZ() {

    setSort(props.products.sort((a, b) => a.name.localeCompare(b.name)));
    GiveSortedArrayToSideBar();
  
  }
  function ZtoA() {
    setSort(props.products.sort((a, b) => b.name.localeCompare(a.name)));
    GiveSortedArrayToSideBar();
   
  }
  function LowToHigh() {
    setSort(props.products.sort((a, b) => a.price-b.price));
    GiveSortedArrayToSideBar();
   
  }
  function HighToLow() {
    setSort(props.products.sort((a, b) => b.price-a.price));
    GiveSortedArrayToSideBar();
   
  }

  const GiveSortedArrayToSideBar=()=>
  {
     props.takeArrayToMain(sortedArray);
  }
  

  return (


    <div className="shop-widget">
      <h3 className="shop-title">SHOP BY</h3>
      <ul className="shop-link">
        <li onClick={AtoZ}><a >Name: A-Z</a></li>
        <li onClick={ZtoA}><a href="#">Name: Z-A</a></li>
        <li onClick={HighToLow}><a href="#">Price: High to Low</a></li>
        <li onClick={LowToHigh}><a href="#">Price: Low to High</a></li>
        <li><a href="#">Product: Top Sales</a></li>
      </ul>
    </div>


  )
}

export default SortFunction