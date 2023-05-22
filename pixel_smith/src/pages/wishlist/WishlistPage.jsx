import React from 'react'

export const WishlistPage = () => {
  return (
    <div>
      <p>Wishlist</p>
      {console.log(localStorage.getItem("token"))}
    </div>
  )
}
