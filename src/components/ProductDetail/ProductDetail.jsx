import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import NotFound from "../NotFound/NotFound.jsx";

export default function ProductDetail(props) {
  const [tabActive, setTabActive] = useState("description")
  const params = useParams()
  const { getProductDetailById } = props
  const product = props.data
  const id = params.id

  useEffect(() => {
    getProductDetailById(id)
  }, [getProductDetailById, id])

  if (props.error || product === null) {
    return <NotFound />
  }

  const onClickTab = (name) => {
    setTabActive(name)
  }
  console.log(product.comments)
  console.log(product.images)
  return (
    <main>
      {/* breadcrumb-area-start */}
      <section
        className="breadcrumb-area"
        style={{ backgroundImage: 'url("./assets/page-title.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Our Shop: {product.shop_name}</h1>
                <ul className="breadcrumb-menu">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <span>shop details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      {/* shop-area start */}
      <section className="shop-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4">
              <div className="product-details-img mb-10">
                <div className="tab-content" id="myTabContentpro">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="product-large-img">
                   
                      {/* <img src={`https://media3.scdn.vn/${product.images[0]}`} alt="" /> */}
                    </div>
                  </div>
                  {/* <div className="tab-pane fade" id="profile" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/product/pro2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile1" role="tabpanel">
                    <div className="product-large-img">
                      <img src="img/product/pro3.jpg" alt="" />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src="img/product/pro1.jpg" alt="" />{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/product/pro2.jpg" alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab2"
                      data-toggle="tab"
                      href="#profile1"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="img/product/pro3.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="product-details mb-30 pl-30">
                <div className="details-cat mb-20">
                  <a href="#">decor,</a>
                  <a href="#">furniture</a>
                </div>
                <h2 className="pro-details-title mb-15">
                  {product.name}
                </h2>
                <div className="details-price mb-20">
                  <span>{product.final_price}</span>
                  <span className="old-price">{product.price}</span>
                </div>
                <div className="product-variant">
                  <div className="product-desc variant-item">
                    <p dangerouslySetInnerHTML={{ __html: product.short_description }} />

                  </div>
                  <div className="product-info-list variant-item">
                    <ul>
                      <li>
                        <span>Brands:</span> Hewlett-Packard
                      </li>
                      <li>
                        <span>Product Code:</span> d12
                      </li>
                      <li>
                        <span>Reward Points:</span> 100
                      </li>
                      <li>
                        <span>Stock:</span>{" "}
                        <span className="in-stock">{product.status_text}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-action-details variant-item">
                    <div className="product-details-action">
                      <form action="#">
                        <div className="plus-minus">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                            <div className="dec qtybutton">-</div>
                            <div className="inc qtybutton">+</div>
                          </div>
                        </div>
                        <button className="details-action-icon" type="submit">
                          <i className="fas fa-heart" />
                        </button>
                        <div className="details-cart mt-40">
                          <button className="btn theme-btn">
                            purchase now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-xl-8 col-lg-8">
              <div className="product-review">
                <ul className="nav review-tab" id="myTabproduct" role="tablist">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tabActive === "description" && "active"}`}
                      id="home-tab6"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      onClick={() => onClickTab("description")}
                    >
                      Description{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tabActive === "comments" && "active"}`}
                      id="profile-tab6"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      onClick={() => onClickTab("comments")}
                    >
                      Reviews ({})
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent2">
                  <div
                    className={`tab-pane fade show ${tabActive === "description" && "active"}`}
                    id="home6"
                    role="tabpanel"
                    aria-labelledby="home-tab6"
                  >
                    <div className="desc-text">
                      <p dangerouslySetInnerHTML={{ __html: product.description }} />


                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${tabActive === "comments" && "active"}`}
                    id="profile6"
                    role="tabpanel"
                    aria-labelledby="profile-tab6"
                    style={{ display: 'block' }}
                  >
                    <div className="desc-text review-text">
                      <div className="product-commnets">
                        <div className="product-commnets-list mb-25 pb-15">
                          <div className="pro-comments-img">
                            <img src="img/product/comments/01.png" alt="" />
                          </div>
                          <div className="pro-commnets-text">
                            <h4>
                              Roger West -<span>June 5, 2018</span>
                            </h4>
                            <div className="pro-rating">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                        <div className="product-commnets-list mb-25 pb-15">
                          <div className="pro-comments-img">
                            <img src="img/product/comments/02.png" alt="" />
                          </div>
                          <div className="pro-commnets-text">
                            <h4>
                              Roger West -<span>June 5, 2018</span>
                            </h4>
                            <div className="pro-rating">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="review-box mt-50">
                        <h4>Add a Review</h4>
                        <div className="your-rating mb-40">
                          <span>Your Rating:</span>
                          <div className="rating-list">
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                            <a href="#">
                              <i className="far fa-star" />
                            </a>
                          </div>
                        </div>
                        <form className="review-form" action="#">
                          <div className="row">
                            <div className="col-xl-12">
                              <label htmlFor="message">YOUR REVIEW</label>
                              <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-xl-6">
                              <label htmlFor="r-name">Name</label>
                              <input type="text" id="r-name" />
                            </div>
                            <div className="col-xl-6">
                              <label htmlFor="r-email">Email</label>
                              <input type="email" id="r-email" />
                            </div>
                            <div className="col-xl-12">
                              <button className="btn theme-btn">
                                Add your Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="pro-details-banner">
                <a href="shop.html">
                  <img src="img/banner/pro-details.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop-area end */}
      {/* product-area start */}
      <section className="product-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="area-title text-center mb-50">
                <h2>Releted Products</h2>
                <p>Browse the huge variety of our products</p>
              </div>
            </div>
          </div>
          <div className="product-slider-2 owl-carousel">
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro4.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro5.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro5.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro6.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro7.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro8.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro9.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro10.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-item">
              <div className="product-wrapper">
                <div className="product-img mb-25">
                  <a href="product-details.html">
                    <img src="img/product/pro1.jpg" alt="" />
                    <img
                      className="secondary-img"
                      src="img/product/pro11.jpg"
                      alt=""
                    />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="flaticon-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="flaticon-eye" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                    >
                      <i className="flaticon-compare" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="new">new</span>
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="pro-cat mb-10">
                    <a href="shop.html">decor, </a>
                    <a href="shop.html">furniture</a>
                  </div>
                  <h4>
                    <a href="product-details.html">
                      Raglan Baseball Style shirt
                    </a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                  <div className="product-wishlist">
                    <a href="#">
                      <i className="far fa-heart" title="Wishlist" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product-area end */}
    </main>
  );
}