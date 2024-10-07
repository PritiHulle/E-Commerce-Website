import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);

  return (
    <div className='ci'>
      <div className="ci-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {all_product.map((e)=>{
        if (cartItems[e.id]>0) 
        {
            return  <div>
            <div className="ci-format ci-format-main">
                <img src={e.image} alt="" className='ci-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='ci-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className="ci-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
     })}
     <div className="ci-down">
        <div className="ci-total">
            <h1>Cart Total</h1>
            <div>
                <div className="ci-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="ci-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="ci-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="ci-promocode">
            <p>If you have a promocode, Enter it here</p>
            <div className="ci-promobox">
                <input type="text" placeholder='Promo code' />
                <button>Submit</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default CartItems
