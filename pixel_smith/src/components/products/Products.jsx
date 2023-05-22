import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import "./Products.css"
import { FilterContext } from '../../index'

export const Products = ({products}) => {
    const {filteredProducts} = useContext(FilterContext)
    return (
        <div className='products-container'>
            {filteredProducts.map((item) => (
                <div className='products'>
                    <Link to={`/product/${item._id}`}   className='link' >
                        <img src={item.img} alt={item.title} width="250px" height="200px"/>
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>Rs. {item.price}</p>
                        <p>Brand: {item.company}</p>
                        <p>Sold By: {item.seller}</p>
                        <div className='flex-row product-btn-container'>
                            <button className='product-btn'>Add to Cart</button>
                            <button className='product-btn'>Add to Wishlist</button>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
