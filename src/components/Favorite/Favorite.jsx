import React from 'react'
import { Link } from 'react-router-dom';

function Favorite(props) {
    // console.log(props.data, "cart store")
   
    // //caculate Total Price
    
    // //caculate Total Price

    function deleteItem(value) {
        var newArray = [...props.data]
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].name === value) {
                newArray.splice(i, 1);
            }
        }
        
        props.getFavoriteSuccess(newArray);
    }




    return (
        <ul className="favorite-cart" id="favorite-cart">
            <h1  style={{textAlign: 'center'}} class="display-7"><i className="fas fa-heart"></i></h1>
            <button type="button" id="close-favorite-btn" class="btn btn-outline-dark">X</button>
            {   
                props.data.map(elm => {
                    return (
                        <li>
                            <div className="cart-img" style={{maxWidth: '150px', maxHeight: '100px'}}>
                                <a href="#">
                                    <img src={`https://media3.scdn.vn/${elm.images[0]}`} alt="" />
                                  
                                </a>
                            </div>
                            <div className="cart-content">
                                <h3>
                                    <a href="#">{elm.name} </a>
                                </h3>
                                <div className="cart-price">
                                    <span className="new">${elm.price}</span>
                                    <span>
                                        <del>${elm.final_price}</del>
                                    </span>
                                </div>
                            </div>
                            <div className="del-icon">
                                <a onClick={(e) => deleteItem(elm.name)}>
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </div>
                        </li>
                    )
                })
            }
            
        </ul>
    )
}


export default Favorite