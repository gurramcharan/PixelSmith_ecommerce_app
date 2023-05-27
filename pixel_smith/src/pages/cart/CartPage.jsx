import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'
import { removeProductFromCart } from '../../utils/CartUtil'

export const CartPage = () => {
  const {productState, productDispatch} = useContext(ApiContext)
  const {cart} = productState
  return (
    <div>
      <h1>CartPage</h1>
      {cart.map((item) => (
        <li key={item._id}>
          <p>{item.title}</p>
          <button onClick={() => removeProductFromCart(productDispatch,item._id)}>Remove</button>
        </li>
      ))}
    </div>
  )
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzMDdmNTVmNi03OGM3LTRmYzktOWNkOC1kNGRhZjU1MzA0MWIiLCJlbWFpbCI6ImNoYXJhbkBnbWFpbC5jb20ifQ.paEsp1cGBrAaV9gzsCqSlWz-qOceKmkhgWQgqtyn1aU

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzMDdmNTVmNi03OGM3LTRmYzktOWNkOC1kNGRhZjU1MzA0MWIiLCJlbWFpbCI6ImNoYXJhbkBnbWFpbC5jb20ifQ.paEsp1cGBrAaV9gzsCqSlWz-qOceKmkhgWQgqtyn1aU

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjZjZhNTRjMy00NTQ4LTRhOWMtYTgwYy1iY2NkY2Y3NTZiY2MiLCJlbWFpbCI6Imd1cnJhbXNpdmFjaGFyYW5AZ21haWwuY29tIn0.-NtfGnpfmw8U__vDaY94fSW7P2yKFbZ21RIo4QMxYnE

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjZjZhNTRjMy00NTQ4LTRhOWMtYTgwYy1iY2NkY2Y3NTZiY2MiLCJlbWFpbCI6Imd1cnJhbXNpdmFjaGFyYW5AZ21haWwuY29tIn0.-NtfGnpfmw8U__vDaY94fSW7P2yKFbZ21RIo4QMxYnE