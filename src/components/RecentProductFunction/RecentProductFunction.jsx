import React from 'react'

function RecentProductFunction(props)
{

return (
    <div className="shop-widget">
    <h3 className="shop-title">Recent Product</h3>
    <ul className="shop-sidebar-product">
      <li>
        <div className="side-pro-img">
          <a href="#"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
        </div>
        <div className="side-pro-content">
          <div className="side-pro-rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h5><a href="#">Raglan Baseball-Style</a></h5>
          <div className="side-pro-price">
            <span>$119.00 USD</span>
          </div>
        </div>
      </li>
      <li>
        <div className="side-pro-img">
          <a href="#"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
        </div>
        <div className="side-pro-content">
          <div className="side-pro-rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h5><a href="#">Raglan Baseball-Style</a></h5>
          <div className="side-pro-price">
            <span>$119.00 USD</span>
          </div>
        </div>
      </li>
      <li>
        <div className="side-pro-img">
          <a href="#"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
        </div>
        <div className="side-pro-content">
          <div className="side-pro-rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h5><a href="#">Raglan Baseball-Style</a></h5>
          <div className="side-pro-price">
            <span>$119.00 USD</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
)
}

export default RecentProductFunction