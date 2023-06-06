import React, {useContext} from 'react'
import "./OrderPlacedPage.css"
import {v4 as uuid} from "uuid";
import {getPriceDetails} from '../../utils/getPriceDetails';
import {ApiContext} from '../../contexts/ApiContext';
import {AddressContext} from '../../contexts/AddressContext';
import { useNavigate } from 'react-router-dom';
import { removeProductFromCart } from '../../utils/CartUtil';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export const OrderPlacedPage = () => {
    const {productState,productDispatch} = useContext(ApiContext)
    const {selectAdd} = useContext(AddressContext)
    const {cart} = productState
    const {discountPrice} = getPriceDetails(cart)
    const navigate = useNavigate()

    useEffect(() => {
        toast.success('Order Placed! Redirecting to home page', {
            position: "top-center",
            autoClose: 1800,
            theme: "colored",
            draggable: true
        });
    })

    setTimeout(() => {
        for(let i=0;i<cart.length;i++){
            removeProductFromCart(productDispatch,cart[i]._id)
        }
        navigate("/")
    },2700)

    return (
        <div>
            <div>
                <h1 className='add-title'>ORDER SUMMARY</h1>
            </div>
            <div className='order-placed-main-container'>
                <p className='order-placed-msg'>Hurray!! Order Placed Successfully</p>
                <div className='order-placed-container'>
                    <div className='order-placed-payment-delivery-details'>
                        <p>Payment Id: <span className='order-placed-span-items'>pay_{uuid()}</span></p>
                        <p>Total Amount Paid: <span className='order-placed-span-items'>Rs.{discountPrice}</span></p>
                        <br/>
                        <p>Order will be delivered to:</p>
                        <span className='order-placed-span-items order-placed-delivery-address'>
                        <p>{selectAdd.name}</p>
                        <p>{selectAdd.hno}, {selectAdd.city}, {selectAdd.state}, {selectAdd.country}, {selectAdd.pincode}.</p>
                        <p>Ph No: {selectAdd.phno}</p>
                        </span>
                    </div>
                    <div className='order-placed-product-details-main-container'>
                        {cart.map((item) => (
                            <div className='order-placed-product-details-container'>
                                <div className='order-placed-product-img-container'>
                                    <img src={item.img} alt={item.title} className='order-placed-product-img' />
                                </div>
                                <div>
                                    <div>
                                    <p className='order-placed-single-product-title'>{item.title}</p>
                                    <p className='order-placed-single-product-category'>{item.category}</p>
                                    </div>
                                    <div className='order-placed-qty-price-container'>
                                        <p>Total Quantity:</p>
                                        <p className='order-placed-qty'>{item.qty}</p>
                                    </div>
                                    <div className='order-placed-qty-price-container'>
                                        <p>Price:</p>
                                        <p className='order-placed-price'>Rs.{item.discountProduct ? item.discountPrice: item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
