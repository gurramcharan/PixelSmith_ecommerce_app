import React, {useContext} from 'react'
import "./ProductFilters.css"
import {ApiContext, FilterContext} from '../..'
import {FaTrash} from "react-icons/fa"
export const ProductFilters = () => {
    const {
        handleClearButton,
        priceRangeValue,
        handlePriceInput,
        handlePriceRangeInput,
        handleAvailabilityInput,
        handleCategoriesInput,
        handleRatingInput,
        handleBrandInput,
        handleMountTypeInput,
        handleColorInput,
        state
    } = useContext(FilterContext)
    const {productState} = useContext(ApiContext)
    const {categories} = productState
    return (
        <div>
            <form>
                <div className='filters-container'>
                    <div>
                        <div className='price-clear-container filter-padding-bottom'>
                            <label htmlFor="price">
                                <b>PRICE</b>
                            </label>
                            <button type="reset" onClick={handleClearButton} className='filters-clear-btn'><FaTrash/></button>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="priceLH"
                                id="priceHL"
                                value="desc"
                                onClick={(e) => handlePriceInput(e)}/>
                            <label htmlFor="priceHL">High to Low</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="priceLH"
                                id="priceLH"
                                value="asc"
                                onClick={(e) => handlePriceInput(e)}/>
                            <label htmlFor="priceLH">Low to High</label>
                        </div>
                    </div>
                    <div>
                        <div className='filter-padding-bottom'>
                            <label htmlFor="price">
                                <b>PRICE RANGE</b>
                            </label>
                        </div>
                        <div>
                            <input
                                type="range"
                                name="priceRange"
                                id="price-range"
                                min="10000"
                                max="70000"
                                step="5000"
                                value={priceRangeValue}
                                list='tickmark'
                                onChange={(e) => {
                                handlePriceRangeInput(e)
                            }}/>
                            <datalist id="tickmark">
                                <option value="10000" label='10000'></option>
                                <option value="15000"></option>
                                <option value="20000"></option>
                                <option value="25000"></option>
                                <option value="30000"></option>
                                <option value="35000"></option>
                                <option value="40000"></option>
                                <option value="45000"></option>
                                <option value="50000"></option>
                                <option value="55000"></option>
                                <option value="60000"></option>
                                <option value="65000"></option>
                                <option value="70000"></option>
                            </datalist>
                            <div
                                className='flex-row'
                                style={{
                                justifyContent: "space-between"
                            }}>
                                <p>10000</p>
                                <p className='filter-padding-bottom'>{priceRangeValue}</p>
                            </div>
                        </div>
                        <div
                            className='flex-column'
                            style={{
                            gap: "0.8rem"
                        }}>
                            <div className=' filter-padding-bottom'>
                                <label htmlFor="price">
                                    <b>AVAILABILITY</b>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="outOfStock"
                                    id="out-of-stock"
                                    value="outOfStock"
                                    onClick={(e) => handleAvailabilityInput(e)}/>
                                <label htmlFor="out-of-stock">Out of Stock</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="fastDelivery"
                                    id="fast-delivery"
                                    value="fastDelivery"
                                    onClick={(e) => handleAvailabilityInput(e)}/>
                                <label htmlFor="fast-delivery">Fast Delivery</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="discountProducts"
                                    id="discount-products"
                                    value="discountProduct"
                                    onClick={(e) => handleAvailabilityInput(e)}/>
                                <label htmlFor="discount-products">Discounted Products</label>
                            </div>
                        </div>
                    </div>
                    <div
                        className='flex-column'
                        style={{
                        gap: "0.8rem"
                    }}>
                        <div>
                            <label htmlFor="price">
                                <b>CATEGORIES</b>
                            </label>
                        </div>
                        <div>
                            {categories
                                ?.map((item) => (
                                    <div>
                                        {item
                                            ?.subCategory
                                                ?.map((product) => (
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            name={product}
                                                            id={product}
                                                            value={product}
                                                            onClick={(e) => handleCategoriesInput(e)}
                                                        />
                                                        <label htmlFor={product}>{product}</label>
                                                    </div>
                                                ))}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div
                        className='flex-column'
                        style={{
                        gap: "0.8rem"
                    }}>
                        <div>
                            <label htmlFor="price">
                                <b>RATING</b>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="rating"
                                id="5-star-rating"
                                value="5star"
                                onClick={(e) => handleRatingInput(e)}/>
                            <label htmlFor="5-star-rating">5 star & below</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="rating"
                                id="4.5-star-rating"
                                value="4.5star"
                                onClick={(e) => handleRatingInput(e)}/>
                            <label htmlFor="4.5-star-rating">4.5 star & below</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="rating"
                                id="4-star-rating"
                                value="4star"
                                onClick={(e) => handleRatingInput(e)}/>
                            <label htmlFor="4-star-rating">4 star & below</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="rating"
                                id="below-3.5-star"
                                value="3.5starAndBelow"
                                onClick={(e) => handleRatingInput(e)}/>
                            <label htmlFor="below-3.5-star">Below 3.5 stars</label>
                        </div>
                    </div>
                    <div
                        className='flex-column'
                        style={{
                        gap: "0.8rem"
                    }}>
                        <div>
                            <label htmlFor="price">
                                <b>BRAND</b>
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="samsung"
                                id="samsung"
                                value="samsung"
                                onClick={(e) => handleBrandInput(e)}/>
                            <label htmlFor="samsung">Samsung</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="lg"
                                id="lg"
                                value="lg"
                                onClick={(e) => handleBrandInput(e)}/>
                            <label htmlFor="lg">LG</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="acer"
                                id="acer"
                                value="acer"
                                onClick={(e) => handleBrandInput(e)}/>
                            <label htmlFor="acer">Acer</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="zebronics"
                                id="zebronics"
                                value="zebronics"
                                onClick={(e) => handleBrandInput(e)}/>
                            <label htmlFor="zebronics">Zebronics</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="benq"
                                id="benq"
                                value="benq"
                                onClick={(e) => handleBrandInput(e)}/>
                            <label htmlFor="benq">Benq</label>
                        </div>
                    </div>
                    <div
                        className='flex-column'
                        style={{
                        gap: "0.8rem"
                    }}>
                        <div>
                            <label htmlFor="price">
                                <b>MOUNT & ROTATION</b>
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="table"
                                id="table-top"
                                value="tableTop"
                                onClick={(e) => handleMountTypeInput(e)}/>
                            <label htmlFor="table-top">Table Top</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="wallMount"
                                id="wall-mount"
                                value="wallMount"
                                onClick={(e) => handleMountTypeInput(e)}/>
                            <label htmlFor="wall-mount">Wall Mount</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="tilt"
                                id="tilt"
                                value="tilt"
                                onClick={(e) => handleMountTypeInput(e)}/>
                            <label htmlFor="tilt">Tilt</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="verticalRotation"
                                id="vertical-rotation"
                                value="verticalRotation"
                                onClick={(e) => handleMountTypeInput(e)}/>
                            <label htmlFor="vertical-rotation">Vertical Rotation</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="heightAdjustable"
                                id="height-adjustable"
                                value="heightAdjustable"
                                onClick={(e) => handleMountTypeInput(e)}/>
                            <label htmlFor="height-adjustable">Height Adjustable</label>
                        </div>
                    </div>
                    <div
                        className='flex-column'
                        style={{
                        gap: "0.8rem"
                    }}>
                        <div>
                            <label htmlFor="price">
                                <b>COLOR:</b>
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="white"
                                id="white"
                                value="white"
                                onClick={(e) => handleColorInput(e)}/>
                            <label htmlFor="white">White</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="silver"
                                id="silver"
                                value="silver"
                                onClick={(e) => handleColorInput(e)}/>
                            <label htmlFor="silver">Silver</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="black"
                                id="black"
                                value="black"
                                onClick={(e) => handleColorInput(e)}/>
                            <label htmlFor="black">Black</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
