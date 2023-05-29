import React, {useContext} from 'react'
import {useNavigate, Link} from "react-router-dom"
import "./Products.css"
import {ApiContext, FilterContext} from '../../index'
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {addToCart, productCheck} from '../../utils/CartUtil';
import {addToWishlist, removeProductFromWishlist, wishlistCheck} from "../../utils/WishlistUtil"
import {BiCartDownload, BiCartAdd} from "react-icons/bi"

export const Products = () => {
    const {filteredProducts} = useContext(FilterContext)
    const {productState, productDispatch} = useContext(ApiContext)
    const isLogged = localStorage.getItem("token")
        ?.length > 0

    const navigate = useNavigate()

    const addToCartHandler = (product) => {
        if (isLogged) {
            if (productCheck(productState
                ?.cart, product
                ?._id)) {
                navigate("/cart");
            } else {
                addToCart(product, productDispatch)
            }
        } else {
            navigate("/login")
        }
    }

    const addToWishlistHandler = (product) => {
        if (isLogged) {
            if (wishlistCheck(productState
                ?.wishlist, product
                ?._id)) {
                removeProductFromWishlist(productDispatch,product._id)
            } else {
                addToWishlist(product, productDispatch)
            }
        } else {
            navigate("/login")
        }
    }

    return (
        <div className='products-container'>
            {filteredProducts.map((item) => (
                <div className='products' key={item._id}>
                    <div className='link'>
                        <div className='wishlist-btn-container'>
                            <button className='wishlist-btn' onClick={() => addToWishlistHandler(item)}>
                                {wishlistCheck(productState
                                    ?.wishlist, item
                                    ?._id)
                                    ? (<AiFillHeart className='wishlist-filled-icon' />)
                                    : (<AiOutlineHeart/>)}
                            </button>
                        </div>
                        <Link to={`/product/${item._id}`} className='link'>
                            <img src={item.img} alt={item.title} width="250px" height="200px"/>
                            <p>{item.title}</p>
                            <p>{item.category}</p>
                            <p>Rs. {item.price}</p>
                            <p>Brand: {item.company}</p>
                            <p>Sold By: {item.seller}</p>
                        </Link>
                        <div className='flex-row product-btn-container'>
                            <button className="product-btn" onClick={() => addToCartHandler(item)}>
                                {productCheck(productState
                                    ?.cart, item
                                    ?._id)
                                    ? (
                                        <p className="row">
                                            <BiCartDownload className="cardAddIcon"/>
                                            Go To Cart
                                        </p>
                                    )
                                    : (
                                        <p className="row">
                                            <BiCartAdd className="cardAddIcon"/>
                                            Add To Cart
                                        </p>
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
