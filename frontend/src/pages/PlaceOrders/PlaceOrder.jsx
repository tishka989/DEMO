import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Second Name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi_fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">

     
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}₸</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery</p>
              <p>{2}₸</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}₸</b>
            </div>
           
          </div>
          <button>proceed to payment</button>
        </div>
      

      </div>
    </form>
  )
}

export default PlaceOrder