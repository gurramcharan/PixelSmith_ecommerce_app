import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"
import {FaRegHeart, FaHeart} from "react-icons/fa";
import {RiShoppingCart2Fill, RiShoppingCart2Line} from "react-icons/ri";
import {IoPersonOutline, IoPerson} from "react-icons/io5";
import {BsHandbag, BsFillHandbagFill} from "react-icons/bs";
import logo from "../../assets/logo.jpeg"
import { useContext } from 'react';
import { ApiContext } from '../../contexts/ApiContext';

export const Navbar = () => {
    const {productState} = useContext(ApiContext)
    const {wishlist,cart} = productState
    return (
        <div>
            <nav className="nav-container">
                <div>
                    <NavLink to="/" className="nav-link nav-link-left"><img src={logo} alt="Img" className='nav-logo-img'/>
                        ℙ𝕚𝕩𝕖𝕝 𝕊𝕞𝕚𝕥𝕙</NavLink>
                </div>
                <div className="nav-items-right">
                    <div className='icon-product-count-container'>
                        <NavLink to="/products" className="nav-link nav-products">{({isActive}) => isActive
                                ? <BsFillHandbagFill/>
                                : <BsHandbag/>}</NavLink>

                    </div>
                    <div className='icon-product-count-container'>
                    
                    <NavLink to="/wishlist" className="nav-link  nav-wishlist">{({isActive}) => isActive
                            ? <FaHeart/>
                            : <FaRegHeart/>}</NavLink>
                    {wishlist.length > 0? (
                        <p className='product-count-value'>{wishlist.length}</p>
                    ):(
                        <p></p>
                    )}       
                    </div>
                    <div className='icon-product-count-container'>    
                    <NavLink to="/cart" className="nav-link  nav-cart">{({isActive}) => isActive
                            ? <RiShoppingCart2Fill/>
                            : <RiShoppingCart2Line/>}</NavLink>
                    {cart.length > 0? (
                        <p className='product-cart-count-value'>{cart.length}</p>
                    ):(
                        <p></p>
                    )}
                    </div>
                    <div className='icon-product-count-container'>    
                    <NavLink to="/login" className="nav-link  nav-profile">{({isActive}) => isActive
                            ? <IoPerson/>
                            : <IoPersonOutline/>}</NavLink>
                    </div>
                </div>
            </nav>
            <div className='nav-below-container'></div>
        </div>
    )
}
