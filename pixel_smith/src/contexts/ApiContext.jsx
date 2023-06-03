import React, {createContext, useContext, useEffect, useReducer} from 'react'
import { productReducer } from '../reducers/ProductReducer'
import { AuthContext } from './AuthContext'
import { getCartProducts } from '../utils/CartUtil'
import { getWishlistProducts } from '../utils/WishlistUtil'

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


        const setCartAndWishlistProduct = async () => {
          try {
            const cartResponse = await getCartProducts(token);
            const wishlistResponse = await getWishlistProducts(token);
            const cartJsonResponse = await cartResponse.json();
            const wishlistJsonResponse = await wishlistResponse.json();
            // console.log(wishlistResponse)
            // console.log(wishlistJsonResponse)
            // console.log(cartResponse)
            // console.log(cartJsonResponse,"json...")
            if (cartResponse && cartResponse.status === 200) {
              productDispatch({ type: "setCart", payload: cartJsonResponse.cart });
            }
            if (wishlistResponse && wishlistResponse.status === 200) {
              productDispatch({ type: "setWishlist", payload: cartJsonResponse.cart });
            }
          } catch (err) {
            console.log(err);
          }
        };

        
        const clearCartAndWishlist = () => {
          productDispatch({ type: "setCart", payload: [] });
          productDispatch({ type: "setWishlist", payload: [] });
        };


        if(authState?.token){
          setCartAndWishlistProduct()
        }
    
        extractProducts();
        extractCategories();
        // !authState?.token && clearCartAndWishlist();
        // authState?.token && setCartAndWishlistProduct();
      }, [productDispatch, authState?.token, token]);

    return (
        <ApiContext.Provider value={{ productState, productDispatch}}>
            {children}
        </ApiContext.Provider>
    )
}