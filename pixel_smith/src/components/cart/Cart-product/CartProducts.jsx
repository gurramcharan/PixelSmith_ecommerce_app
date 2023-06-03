import React, {useContext} from 'react'
import {ApiContext} from '../../../contexts/ApiContext'
import {handleProductQuantity, removeProductFromCart} from '../../../utils/CartUtil'
import {Link, useNavigate} from "react-router-dom"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import {FaRupeeSign} from "react-icons/fa"
import {wishlistCheck} from '../../../utils/WishlistUtil'

import "./CartProducts.css"
import {addToWishlist} from '../../../utils/WishlistUtil'

export const CartProducts = () => {
    const {productState, productDispatch} = useContext(ApiContext)
    const {cart, wishlist} = productState
    const navigate = useNavigate()

    function calculateDiscountPercentage(price, discountedPrice) {
        const discount = price - discountedPrice;
        const discountPercentage = (discount / price) * 100;
        return Math.round(discountPercentage);
    }

    const handleMoveToWishlist = (product) => {
        const isInWishlist = wishlistCheck(wishlist, product._id)
        if (isInWishlist) {
            navigate("/wishlist")
        } else {
            addToWishlist(product, productDispatch);
            removeProductFromCart(productDispatch, product._id)
        }
    }

    return (
            <div className='cart-products-container'>
                {cart.map((item) => (
                    <div key={item._id} className='cart-img-details-container'>
                        <div className='cart-img-container'>
                            <img src={item.img} alt={item.title} className='cart-product-img'/>
                        </div>
                        <div>
                            <p>{item.title}</p>
                            <p className='cart-product-category'>{item.category}</p>
                            <div className='cart-product-quantity'>
                                <button
                                    className='plus-minus-buttons'
                                    onClick={() => handleProductQuantity(productDispatch, item._id, "decrement")}
                                    disabled={item.qty <= 1}><AiOutlineMinus/></button>
                                <p className='cart-product-quantity-value'>{item.qty}</p>
                                <button
                                    className='plus-minus-buttons'
                                    onClick={() => handleProductQuantity(productDispatch, item._id, "increment")}><AiOutlinePlus/></button>
                            </div>
                            <div className="cart-product-prices">
                                {item.discountProduct
                                    ? (
                                        <div>
                                            <p className="cart-discount-price">
                                                <FaRupeeSign className='rupee-icon'/>{item.discountPrice}{' '}
                                                <span
                                                    className={item.discountProduct
                                                    ? "cart-original-price-line-through"
                                                    : "cart-original-price"}>{item.price}</span>{" "}
                                                <span className="cart-discount-percentage">
                                                    {calculateDiscountPercentage(item.price, item.discountPrice)}% off
                                                </span>
                                            </p>

                                        </div>
                                    )
                                    : (

                                        <p className="original-price"><FaRupeeSign className='rupee-icon'/>{item.price}</p>
                                    )}
                            </div>
                            <div className='cart-btn-container'>
                                <button onClick={() => handleMoveToWishlist(item)} className='cart-btn'>
                                    {wishlistCheck(wishlist, item._id)
                                        ? "Already in Wishlist"
                                        : "Move to Wishlist"}
                                </button>
                                <button
                                    className='cart-btn'
                                    onClick={() => removeProductFromCart(productDispatch, item._id)}><RiDeleteBin6Line className='cart-delete-icon'/>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}
