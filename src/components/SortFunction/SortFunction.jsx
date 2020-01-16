import React,{useContext,useEffect} from 'react'
import { ThemeContext } from '../../ThemeContext';
import Axios from 'axios';

function SortFunction(props) 
{
  useEffect(() => {
    props.getProductList();

  }, [])
  console.log(props.data,"from sort")
  const context=useContext(ThemeContext)


  function AtoZ() {
    return async()=>
    {
     try {
       let key_word = props.metadata.key_word;
       let page_num = context.currentPage
       const result = await Axios({
         method: "GET",
         url: `https://mapi.sendo.vn/mob/product/search?p=${page_num}&q=${key_word}`
       })
       console.log(result)
       let newArray = [...result.data.data]
       props.getProductListBySort(newArray.sort((a, b) => a.name.localeCompare(b.name)));
 
     } catch (error) {
       console.log(error)
     }
    }
    
  
  }
  function ZtoA() {
    return async()=>
    {
     try {
       let key_word = props.metadata.key_word;
       let page_num = context.currentPage
       const result = await Axios({
         method: "GET",
         url: `https://mapi.sendo.vn/mob/product/search?p=${page_num}&q=${key_word}`
       })
       console.log(result)
       let newArray = [...result.data.data]
       props.getProductListBySort(newArray.sort((a, b) => b.name.localeCompare(a.name)));
 
     } catch (error) {
       console.log(error)
     }
    }
  
   
  }
  function LowToHigh() {
    return async()=>
    {
     try {
       let key_word = props.metadata.key_word;
       let page_num = context.currentPage
       const result = await Axios({
         method: "GET",
         url: `https://mapi.sendo.vn/mob/product/search?p=${page_num}&q=${key_word}`
       })
       console.log(result)
       let newArray = [...result.data.data]
       props.getProductListBySort(newArray.sort((a, b) => a.final_price-b.final_price));
 
     } catch (error) {
       console.log(error)
     }
    }
    
   
  }
  function HighToLow() {
    return async()=>
    {
     try {
       let key_word = props.metadata.key_word;
       let page_num = context.currentPage
       const result = await Axios({
         method: "GET",
         url: `https://mapi.sendo.vn/mob/product/search?p=${page_num}&q=${key_word}`
       })
       console.log(result)
       let newArray = [...result.data.data]
       props.getProductListBySort(newArray.sort((a, b) => b.final_price-a.final_price));
 
     } catch (error) {
       console.log(error)
     }
    }
    
   
  }
  function TopSales() {
    return async()=>
    {
     try {
       let key_word = props.metadata.key_word;
       let page_num = context.currentPage
       const result = await Axios({
         method: "GET",
         url: `https://mapi.sendo.vn/mob/product/search?p=${page_num}&q=${key_word}`
       })
       console.log(result)
       let newArray = [...result.data.data]
       let filteredArray = newArray.filter(a => a.promotion_percent > 35)
       console.log(filteredArray)
       await props.getProductListBySort(filteredArray)
 
     } catch (error) {
       console.log(error)
     }
    }
   }
 
  

 
  

  return (


    <div className="shop-widget">
      <h3 className="shop-title">SHOP BY</h3>
      <ul className="shop-link">
        <li onClick={AtoZ()}><a href="#">Name: A-Z</a></li>
        <li onClick={ZtoA()}><a href="#">Name: Z-A</a></li>
        <li onClick={HighToLow()}><a href="#">Price: High to Low</a></li>
        <li onClick={LowToHigh()}><a href="#">Price: Low to High</a></li>
        <li onClick={TopSales()}><a href="#">Product: Top Sales</a></li>
      </ul>
    </div>


  )
}

export default SortFunction