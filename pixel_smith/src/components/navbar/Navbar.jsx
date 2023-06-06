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
                        ><img src={logo} alt="Img" className='nav-logo-img' /> PixelSmith</NavLink>
                </div>
                <div className="nav-items-right">
                    <NavLink
                        to="/products"
                        className="nav-link"
                        >{({ isActive }) => isActive ? <BsFillHandbagFill className='icon-large' />: <BsHandbag className='icon-large'  />}</NavLink>
                    <NavLink
                        to="/wishlist"
                        className="nav-link"
                        >{({ isActive }) => isActive ? <FaHeart className='icon-large' />: <FaRegHeart className='icon-large'  />}</NavLink>
                    <NavLink
                        to="/cart"
                        className="nav-link"
                        >{({ isActive }) => isActive ? <RiShoppingCart2Fill className='icon-large' />: <RiShoppingCart2Line className='icon-large'  />}</NavLink>
                    <NavLink
                        to="/login"
                        className="nav-link"
                        >{({ isActive }) => isActive ? <IoPerson  className='icon-large' />: <IoPersonOutline className='icon-large'  />}</NavLink>
                </div>
            </nav>
            <div className='nav-below-container'></div>
    </div>
  )
}
