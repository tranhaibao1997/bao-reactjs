import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import formatPrice from '../../format'
import Axios from 'axios';
import { ThemeContext } from '../../ThemeContext';

class RecentProductFunction extends React.Component {
  static contextType=ThemeContext
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 200, max: 500 },
    };
    

  }


   FilterByPrice() {
     return async()=>
     {
      try {
        
        let key_word = this.props.metadata.key_word;
        let page_num = this.context.currentPage;
        console.log(page_num)
        const result = await Axios({
          method: "GET",
          url: `https://mapi.sendo.vn/mob/product/search?p=${page_num}&q=${key_word}`
        })
        let newArray = [...result.data.data]
        let filteredArray = newArray.filter(a => a.final_price > (this.state.value.min * 1000) && a.final_price < (this.state.value.max * 1000))
        await this.props.getProductListBySort(filteredArray)
        window.scrollTo(0, 550);
      } catch (error) {
        console.log(error)
      }
     }
 }
  render() {
    

    return (
      <div className="shop-widget">
        <h3 className="shop-title">Price Filter</h3>
        <p>From: <span class="price-filer-fromTo-text">{formatPrice(this.state.value.min)},000đ</span> - To: <span class="price-filer-fromTo-text">{formatPrice(this.state.value.max)},000đ</span></p>
        <InputRange
          maxValue={2000}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
        <br></br>
        <button type="button" class="btn btn-outline-danger" onClick={this.FilterByPrice()}>Lọc</button>
      </div>
    );
  }
}

export default RecentProductFunction