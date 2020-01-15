import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import formatPrice from '../../format'

class RecentProductFunction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 200, max: 500 },
    };
  }

  



  render() {
    const FilterByPrice=()=>{
      
      let newArray=[...this.props.data]
      console.log(this.state.value.min*1000)
      let filterdArray=newArray.filter(a=> a.final_price>(this.state.value.min*1000) && a.final_price <(this.state.value.max *1000))
      this.props.getProductListBySort(filterdArray)
      
    
      
    }
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
        <button type="button" class="btn btn-outline-danger" onClick={FilterByPrice}>Lọc</button>
      </div>
    );
  }
}

export default RecentProductFunction