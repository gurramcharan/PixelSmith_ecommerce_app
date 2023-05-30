import React, {useContext} from 'react'
import {ApiContext} from '../..'
import {removeProductFromWishlist} from '../../utils/WishlistUtil'

export const WishlistPage = () => {
    const {productState, productDispatch} = useContext(ApiContext)
    const {wishlist} = productState
    return (
        <div>
            {wishlist.length === 0 ? (
              <div>Nothing</div>
            ) : (
              wishlist.map((item) => (
                <li>
                    <p>{item.title}</p>
                    <button onClick={() => removeProductFromWishlist(productDispatch, item._id)}>Remove</button>
                </li>
            ))
            )
          }
        </div>
    )
}
