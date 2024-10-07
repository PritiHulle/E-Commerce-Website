import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='pd'>
        <div className="pd-left">
            <div className="pd-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="pd-img">
                <img className="pd-main-img" src={product.image} alt="" />
            </div>
        </div>
      <div className="pd-right">
        <h1>{product.name}</h1>
        <div className="pd-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="pd-right-prices">
            <div className="pd-right-price-old">
                ${product.old_price}
                </div>
            <div className="pd-right-price-new">
                ${product.new_price}
                </div>
            </div>
       
        <div className="pd-right-description">
            A Lightweight,usually knitted,pullover shirt, close-fitting and 
            a round neckline and short sleeves,worn as an undershirt or outer garment
        </div>
        <div className="pd-right-size">
            <h1>Select Size</h1>
            </div>
            <div className="pd-right-size">
               <div>S</div>
               <div>M</div>
               <div>L</div>
               <div>XL</div>
               <div>XXL</div>
           
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className='pd-right-category'><span>Category :</span>Women , T-Shirt, Crop Tops</p>
<p className='pd-right-category'><span>Tags :</span>Modern , Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay
