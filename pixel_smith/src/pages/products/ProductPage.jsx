import React from 'react'
import {useContext} from 'react'
import {ApiContext, FilterContext} from '../../index'
import "./ProductPage.css"
import {ProductFilters} from '../../components/filters/ProductFilters'
import {Products} from '../../components/products/Products'
import {FaSearch} from "react-icons/fa"

export const ProductPage = () => {
    const {product} = useContext(ApiContext)
    const {setSearchBarValue, handleSearchInput} = useContext(FilterContext)
    return (
        <div>
            <div className='search-container'>
                <input
                    type="search"
                    name="productSearch"
                    id="productSearch"
                    placeholder='search products...'
                    onChange={(e) => setSearchBarValue(e.target.value)}/>
                <button onClick={handleSearchInput} className='products-search-btn'><FaSearch /></button>
            </div>
            <div className='product-page-container'>
                <div>
                    <ProductFilters/>
                </div>
                <div>
                    <Products products={product}/>
                </div>
            </div>
        </div>

    )
}