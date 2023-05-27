import React, {createContext, useContext, useEffect, useReducer} from 'react'
import { productReducer } from '../reducers/ProductReducer'
import { AuthContext } from './AuthContext'
import { getCartProducts } from '../utils/CartUtil'

export const ApiContext = createContext()

export const ApiProvider = ({children}) => {
   const {authState} = useContext(AuthContext);
    const productInitialState = {
        products:[],
        cart:[],
        categories:[],
        wishlist:[],
    }
    const token = localStorage.getItem("token")

    const [productState,productDispatch] = useReducer(productReducer,productInitialState)

    const extractProducts =async () => {
        try {
            const res = await fetch("/api/products")
            const {products} =await res.json()
            // setProducts(products)
            productDispatch({type:"setProducts",payload: products})
        } catch (error) {
            console.error(error)
        }
    }
    const extractCategories =async () => {
        try {
            const res = await fetch("/api/categories")
            const {categories} =await res.json()
            // setCategories(categories)
            productDispatch({type:"setCategories",payload: categories})
        } catch (error) {
            console.error(error)
        }
    }

      useEffect(() => {
        const setCartProduct = async () => {
          try {
            const cartResponse = await getCartProducts(token);
            const cartJSonResponse = await cartResponse.json();
            console.log(cartResponse)
            console.log(cartJSonResponse,"json...")
            if (cartResponse.status === 200) {
              productDispatch({ type: "setCart", payload: cartJSonResponse.cart });
            }
          } catch (err) {
            console.log(err);
          }
        };
        const clearCart = () => {
          productDispatch({ type: "setCart", payload: [] });
        };
    
        extractProducts();
        extractCategories();
        !authState?.token && clearCart();
        authState?.token && setCartProduct();
      }, [productDispatch, authState?.token, token]);

    return (
        <ApiContext.Provider value={{ productState, productDispatch}}>
            {children}
        </ApiContext.Provider>
    )
}