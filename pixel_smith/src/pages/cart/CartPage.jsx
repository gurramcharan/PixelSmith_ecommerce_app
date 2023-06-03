import React, {useContext} from 'react'

import {ApiContext} from '../..'
import "./CartPage.css"
import {CartProducts} from '../../components/cart/Cart-product/CartProducts'
import {CartProductPrice} from '../../components/cart/Cart-price/CartProductPrice'

export const CartPage = () => {
    const {productState} = useContext(ApiContext)
    const {cart} = productState
    return (
        <div>
            <h1 className='my-cart'>My Cart {cart.length > 0
                    ? `(${cart.length})`
                    : ""}
            </h1>
            {cart.length === 0
                ? (
                    <div>
                        <div className='cart-empty-message'>Your Cart is Empty!</div>
                    </div>
                )
                : (
                    <div className='cart-components-main-container'>
                        <div className='cart-components-container'>
                            <div>
                                <CartProducts/>
                            </div>
                            <div>
                                <CartProductPrice/>
                            </div>
                        </div>
                    </div>

                )}
        </div>
    )
}
