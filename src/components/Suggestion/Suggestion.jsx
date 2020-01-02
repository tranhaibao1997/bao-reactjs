import React from 'react'
import { getProductListBySearch } from '../ProductList/ProductList.action'

function SuggestionFunction(props) {
function sendSuggestion(value)
{
    console.log(value);
props.getProductListBySearch(value)
}

    return (
        <>
       <p style={{margin: 0}}>Gợi ý:</p>
        <div className="suggestion">
          <a onClick={(abc)=>sendSuggestion("áo khoác")}className="badge badge-danger">#áo khoác</a>
          <a onClick={(abc)=>sendSuggestion("áo tay dài")} className="badge badge-danger">#áo tay dài</a>
          <a onClick={(abc)=>sendSuggestion("thời trang hàn quốc")} className="badge badge-danger">#thời trang hàn quốc</a>
          <a onClick={(abc)=>sendSuggestion("trang phục nhật bản")} className="badge badge-danger">#trang phục nhật bản</a>
          <a onClick={(abc)=>sendSuggestion("áo cute")} className="badge badge-danger">#áo cute</a>
          <a onClick={(abc)=>sendSuggestion("quần bò")} className="badge badge-danger">#quần bò</a>
          <a onClick={(abc)=>sendSuggestion("áo công sở")} className="badge badge-danger">#áo công sở</a>
          <a onClick={(abc)=>sendSuggestion("thời trang văn phòng")} className="badge badge-danger">#thời trang văn phòng</a>

        </div>
        </>
    )
}
export default SuggestionFunction