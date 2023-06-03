import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {AddressContext, ApiContext} from "../../../index"
import "./AddressPagePriceComponent.css"
import {getPriceDetails} from "../../../utils/getPriceDetails"

export const AddressPagePriceComponent = () => {
    const {productState} = useContext(ApiContext)
    const {selectAdd} = useContext(AddressContext)
    const {cart} = productState
    const navigate = useNavigate()
    const {totalPrice, discount, delivery, discountPrice} = getPriceDetails(cart)
    return (
        <div>
            <div className='add-price-container'>
                <hr/>
                <p className='add-price-details'>CHECKOUT DETAILS</p>
                <hr/>
                <br/>
                <div className='add-price-details-container'>
                    <p>Price{`(${cart.length} ${cart.length === 1
                            ? "item"
                            : "items"})`}</p>
                    <p>Rs.{totalPrice}</p>
                </div>
                <div className='add-price-details-container'>
                    <p>Discount</p>
                    <p>-Rs. {discount}</p>
                </div>
                <div className='add-price-details-container'>
                    <p>Delivery Charges</p>
                    <p>{delivery === 0
                            ? "FREE"
                            : `Rs. ${delivery}`}</p>
                </div>
                <div className='add-price-details-container total-message'>
                    <p>Total Amount</p>
                    <p>Rs. {discountPrice}</p>
                </div>
                <hr/>
                <p className='delivery-details'>DELIVERY ADDRESS</p>
                <hr/> {selectAdd.length === 0
                    ? (
                        <div>
                            <p>Select Address to Place Order</p>
                        </div>
                    )
                    : (
                        <div className='checkout-delivery-address'>
                            <p className='checkout-delivery-name'>{selectAdd.name}</p>
                            <p className='checkout-delivery-details'>{selectAdd.hno}, {selectAdd.city}, {selectAdd.state}, {selectAdd.country}, {selectAdd.pincode}.</p>
                            <p className='checkout-delivery-details'>Phone Number: {selectAdd.phno}</p>
                        </div>
                    )}
                <button
                    className='place-order-btn'
                    onClick={() => navigate("/orderplaced")}
                    disabled={selectAdd.length === 0}>Place Order</button>
            </div>
        </div>
    )
}

// {discountPrice ? discountPrice : "0"}