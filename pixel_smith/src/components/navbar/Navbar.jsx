import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import {FaRegHeart, FaHeart} from "react-icons/fa";
import { RiShoppingCart2Fill,RiShoppingCart2Line } from "react-icons/ri";
import { IoPersonOutline,IoPerson } from "react-icons/io5";
import { BsHandbag, BsFillHandbagFill } from "react-icons/bs";
import logo from "../../assets/logo.jpeg"

export const Navbar= () => {
  return (
    <div>
        <nav className="nav-container">
                <div>
                    <NavLink
                        to="/"
                        className="nav-link nav-link-left"
                        ><img src={logo} alt="Img" className='nav-logo-img' /> ℙ𝕚𝕩𝕖𝕝 𝕊𝕞𝕚𝕥𝕙</NavLink>
                </div>
                <div className="nav-items-right">
                    <NavLink
                        to="/products"
                        className="nav-link nav-products"
                        >{({ isActive }) => isActive ? <BsFillHandbagFill />: <BsHandbag   />}</NavLink>
                    <NavLink
                        to="/wishlist"
                        className="nav-link  nav-wishlist"
                        >{({ isActive }) => isActive ? <FaHeart/>: <FaRegHeart/>}</NavLink>
                    <NavLink
                        to="/cart"
                        className="nav-link  nav-cart"
                        >{({ isActive }) => isActive ? <RiShoppingCart2Fill/>: <RiShoppingCart2Line />}</NavLink>
                    <NavLink
                        to="/login"
                        className="nav-link  nav-profile"
                        >{({ isActive }) => isActive ? <IoPerson />: <IoPersonOutline />}</NavLink>
                </div>
            </nav>
            <div className='nav-below-container'></div>
    </div>
  )
}
