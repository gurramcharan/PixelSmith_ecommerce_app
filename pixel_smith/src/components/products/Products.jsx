import React, {useContext} from 'react'
import {useNavigate, Link} from "react-router-dom"
import "./Products.css"
import {ApiContext, FilterContext} from '../../index'
import {AiOutlineHeart} from "react-icons/ai";
import {addToCart, productCheck} from '../../utils/CartUtil';
import {BiCartDownload,BiCartAdd} from "react-icons/bi"

export const Products = () => {
    const {filteredProducts} = useContext(FilterContext)
    const {productState, productDispatch} = useContext(ApiContext)
    const isLogged = localStorage.getItem("token")?.length > 0

    const navigate = useNavigate()

    const addToCartHandler = (product) => {
        if (isLogged) {
            if (productCheck(productState?.cart, product?._id)) {
                navigate("/cart");
            } else {
                addToCart(product, productDispatch)
            }
        } else {
            navigate("/login")
        }
    }

    return (
        <div className='products-container'>
            {filteredProducts.map((item) => (
                <div className='products' key={item._id}>
                    {/* <Link to={`/product/${item._id}`} className='link'> */}
                    <div className='link'>
                        <div className='wishlist-btn-container'>
                            <button className='wishlist-btn'><AiOutlineHeart/></button>
                        </div>
                        <img src={item.img} alt={item.title} width="250px" height="200px"/>
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>Rs. {item.price}</p>
                        <p>Brand: {item.company}</p>
                        <p>Sold By: {item.seller}</p>
                        <div className='flex-row product-btn-container'>
                            <button className="product-btn" onClick={() => addToCartHandler(item)}>
                                {productCheck(productState?.cart, item?._id)
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
                                    {/* {productState?.cart?.includes(item) ? (<Link to="/cart">Go to Cart</Link>): ("Add to Cart")} */}
                            </button>
                        </div>
                        </div>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    )
}
