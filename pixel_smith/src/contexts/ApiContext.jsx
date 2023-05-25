import React, {createContext, useEffect, useState} from 'react'

export const ApiContext = createContext()

export const ApiProvider = ({children}) => {
    const [product,setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const token = localStorage.getItem("token")
    const extractProducts =async () => {
        try {
            const res = await fetch("/api/products")
            const {products} =await res.json()
            setProducts(products)
        } catch (error) {
            console.error(error)
        }
    }
    const extractCategories =async () => {
        try {
            const res = await fetch("/api/categories")
            const {categories} =await res.json()
            setCategories(categories)
        } catch (error) {
            console.error(error)
        }
    }

    const extractCart = async (encodedToken) => {
        try {
          const res = await fetch("/api/user/cart", {
            headers: { authorization: encodedToken },
          });
          console.log(await res.json())
          if (res.status === 200) {
            console.log("hehe")
          }
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        extractProducts()
        extractCategories()
        extractCart(token)
    },[])

    return (
        <ApiContext.Provider value={{ product, categories}}>
            {children}
        </ApiContext.Provider>
    )
}