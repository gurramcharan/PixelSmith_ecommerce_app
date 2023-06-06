import React, {useContext} from 'react'
import {ApiContext} from '../..'
import {removeProductFromWishlist} from '../../utils/WishlistUtil'
import "./WishlistPage.css"
import {RiDeleteBin6Line} from "react-icons/ri";
import {BiCartAdd, BiCartDownload} from "react-icons/bi";
import {addToCart, productCheck} from "../../utils/CartUtil"
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WishlistPage = () => {
    const {productState, productDispatch} = useContext(ApiContext)
    const {wishlist} = productState

    const navigate = useNavigate()

    const addToCartHandler = (product) => {
        if (productCheck(productState
            ?.cart, product
            ?._id)) {
            navigate("/cart");
        } else {
            addToCart(product, productDispatch)
            toast.success('Added to cart!', {
                position: "top-center",
                autoClose: 1000,
                theme: "colored",
                draggable: true
            });
        }
    }

    const handleRemoveFromWishlistBtn = (id) => {
        removeProductFromWishlist(productDispatch, id)
        toast.error('Removed from wishlist!',{
            position:"top-center",
            autoClose:1000,
            theme:"colored",
            draggable:true,
        });
    }

    function calculateDiscountPercentage(price, discountedPrice) {
        const discount = price - discountedPrice;
        const discountPercentage = (discount / price) * 100;
        return Math.round(discountPercentage);
    }
    return (
        <div>
            <h1 className='my-wishlist'>My Wishlist {wishlist.length > 0
                    ? `(${wishlist.length})`
                    : ""}</h1>
            {wishlist.length === 0
                ? (
                    <div className='wishlist-empty-message'>Your Wishlist is Empty!</div>
                )
                : (
                    <div className='my-wishlist'>
                        {wishlist.map((item) => (
                            <div className='wishlist-item-box'>
                                <div>
                                    <img src={item.img} alt={item.title} className='wishlist-img'/>

                                </div>
                                <div >
                                    <p className='wishlist-product-title'>{item.title}</p>
                                    <div className='wishlist-category-company-container'>
                                        <p className='wishlist-product-company'>{item.company}</p>
                                        <p className='wishlist-product-category'>{item.category}</p>
                                    </div>
                                    <div className="wishlist-product-prices">
                                        {item.discountProduct
                                            ? (
                                                <div>
                                                    <p className="wishlist-discount-price">
                                                        {item.discountPrice}{' '}
                                                        <span
                                                            className={item.discountProduct
                                                            ? "wishlist-original-price-line-through"
                                                            : "wishlist-original-price"}>{item.price}</span>{" "}
                                                        <span className="wishlist-discount-percentage">
                                                            {calculateDiscountPercentage(item.price, item.discountPrice)}% off
                                                        </span>
                                                    </p>

                                                </div>
                                            )
                                            : (
                                                <p className="original-price">{item.price}</p>
                                            )}
                                    </div>
                                    <div className='wishlist-cart-remove-container'>

                                        <button
                                            className='wishlist-addtocart-btn'
                                            onClick={() => addToCartHandler(item)}>
                                            {productCheck(productState
                                                ?.cart, item
                                                ?._id)
                                                ? (
                                                    <p>
                                                        <BiCartDownload/>
                                                        Go To Cart
                                                    </p>
                                                )
                                                : (
                                                    <p>
                                                        <BiCartAdd/>
                                                        Add To Cart
                                                    </p>
                                                )}
                                        </button>
                                        <button
                                            className='wishlist-remove-btn'
                                            onClick={() => handleRemoveFromWishlistBtn(item._id)}><RiDeleteBin6Line className='wishlist-delete-icon'/>Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
}
            <ToastContainer limit={4}/>
        </div>
    )
}

