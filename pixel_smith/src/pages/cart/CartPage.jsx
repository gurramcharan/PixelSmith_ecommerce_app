import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'
import { handleProductQuantity, removeProductFromCart } from '../../utils/CartUtil'

export const CartPage = () => {
  const {productState, productDispatch} = useContext(ApiContext)
  const {cart} = productState
  return (
    <div>
      <h1>CartPage</h1>
      {cart.map((item) => (
        <li key={item._id}>
          <p>{item.title}</p>
          <p>Qunatity: {item.qty}</p>
          <button onClick={() => handleProductQuantity(productDispatch,item._id,"increment")}>Increment</button>
          <button onClick={() => handleProductQuantity(productDispatch,item._id,"decrement")} disabled={item.qty <= 1}>Decrement</button>
          <button onClick={() => removeProductFromCart(productDispatch,item._id)}>Remove</button>
        </li>
      ))}
    </div>
  )
}
