import React, {useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import {FilterContext} from '../../index'
import "./ProductDetail.css"
import {BsStarFill} from "react-icons/bs"
import {ImCross} from "react-icons/im"
// React component
export const ProductDetail = () => {
    const {productId} = useParams();
    const {filteredProducts} = useContext(FilterContext);
    const filterProduct = filteredProducts.filter((item) => item._id === productId);

    function calculateDiscountPercentage(price, discountedPrice) {
        const discount = price - discountedPrice;
        const discountPercentage = (discount / price) * 100;
        return Math.round(discountPercentage);
    }

    return (
        <div className="product-container">
            {filterProduct.map((item) => (
                <div key={item._id} className="product-details">
                    <Link to="/products" className="go-back-link">
                        <ImCross />
                    </Link>

                    <div className='image-content-container'>
                        <div>
                            <div className="product-image flex-column">
                                <img src={item.img} alt={item.title}/>
                                <div className='flex-row individual-product-btn-container'>
                                    <button className='product-btn-individual'>Add to Cart</button>
                                    <button className='product-btn-individual'>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-info">
                                <p className="product-title">{item.title}</p>
                                <div className='product-category-color-container'>
                                    <div>
                                        <p className="product-category">{item.category}</p>
                                        <p className="product-rating">
                                            <b>{item.rating} <BsStarFill className='rating-icon' /></b>
                                        </p>
                                    </div>
                                    <div>

                                        <p className="product-color">
                                            <b>Color:
                                            </b>{item
                                                .color
                                                .toUpperCase()}</p>
                                        <p
                                            className={item.outOfStock
                                            ? "text-color-red stock-status "
                                            : 'text-color-green stock-status'}>{item.outOfStock
                                                ? 'Out Of Stock'
                                                : 'In Stock'}</p>
                                    </div>
                                </div>
                                <div className="product-prices">
                                    {item.discountProduct
                                        ? (
                                            <div>
                                                <p className="discount-price">
                                                    {item.discountPrice}{' '}
                                                    <span className="discount-percentage">
                                                        {calculateDiscountPercentage(item.price, item.discountPrice)}% off
                                                    </span>
                                                </p>
                                                <p
                                                    className={item.discountProduct
                                                    ? "original-price-line-through"
                                                    : "original-price"}>{item.price}</p>
                                            </div>
                                        )
                                        : (
                                            <p className="original-price">{item.price}</p>
                                        )}
                                </div>
                                

                                <hr/>

                                <p className="product-company">Company: {item.company}</p>
                                <p className="product-seller">Sold By: {item.seller}</p>

                                <p className="product-warranty">Warranty: {item.warranty}</p>
                                {item
                                    .features
                                    .map((feature, index) => (
                                        <div key={index} className="product-feature">
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                <div className="product-stock-details">

                                    {item.fastDelivery && <p className="fast-delivery">Fast Delivery</p>}
                                    {item.table && <p className="table-mount">TableTop Mounting</p>}
                                    {item.wallMount && <p className="wall-mount">Wall Mountable</p>}
                                </div>
                                <div className="product-options">
                                    <p className="option-tilt">Tilt: {item.tilt
                                            ? 'yes'
                                            : 'no'}</p>
                                    <p className="option-rotation">Vertical Rotation: {item.verticalRotation
                                            ? 'yes'
                                            : 'no'}</p>
                                    <p className="option-adjustable">Height Adjustable: {item.heightAdjustable
                                            ? 'yes'
                                            : 'no'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};