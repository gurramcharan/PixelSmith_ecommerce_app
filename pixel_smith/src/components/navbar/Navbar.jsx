import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar= () => {
  return (
    <div>
        <nav className="nav-container">
                <div>
                    <NavLink
                        to="/"
                        className="nav-link nav-link-left"
                        >PixelSmith</NavLink>
                </div>
                <div className="nav-items-right">
                    <NavLink
                        to="/products"
                        className="nav-link"
                        >Products</NavLink>
                    <NavLink
                        to="/wishlist"
                        className="nav-link"
                        >WishList</NavLink>
                    <NavLink
                        to="/cart"
                        className="nav-link"
                        >Cart</NavLink>
                    <NavLink
                        to="/login"
                        className="nav-link"
                        >Log-In</NavLink>
                </div>
            </nav>
            <div className='nav-below-container'></div>
    </div>
  )
}
