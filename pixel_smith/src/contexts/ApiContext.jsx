import React, {createContext, useEffect, useState} from 'react'

export const ApiContext = createContext()

export const ApiProvider = ({children}) => {
    const [product,setProducts] = useState([])
    const [categories,setCategories] = useState([])
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

    useEffect(() => {
        extractProducts()
        extractCategories()
    },[])
    return (
        <ApiContext.Provider value={{ product, categories}}>
            {children}
        </ApiContext.Provider>
    )
}