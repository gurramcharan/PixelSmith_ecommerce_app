import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {ApiContext} from '../../..'
import "./CartProductPrice.css"
import {getPriceDetails} from '../../../utils/getPriceDetails'

export const CartProductPrice = () => {
    const {productState} = useContext(ApiContext)
    const {cart} = productState
    const navigate = useNavigate()
    const {totalPrice,discount,delivery,discountPrice} = getPriceDetails(cart)
    return (
        <div>
            <div className='price-container'>
                <hr/>
                <p className='price-details'>PRICE DETAILS</p>
                <hr/> <br />
                <div className='price-details-container'>
                        <p>Price{`(${cart.length} ${cart.length === 1
                                ? "item"
                                : "items"})`}</p>
                        <p>Rs.{totalPrice}</p>
                </div>
                <div className='price-details-container'>
                  <p>Discount</p>
                  <p>-Rs. {discount}</p>
                </div>
                <div className='price-details-container'>
                  <p>Delivery Charges</p>
                  <p>{delivery === 0 ? "FREE": `Rs. ${delivery}`}</p>
                </div>
                <hr />
                <div className='total-message'>
                  <p>Total</p>
                  <p>Rs. {discountPrice}</p>
                </div>
                <hr />
                {/* <Link to="/address"> */}
                    <button className='checkout-btn' onClick={() => navigate("/address")}>CheckOut</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

// {discountPrice ? discountPrice : "0"}