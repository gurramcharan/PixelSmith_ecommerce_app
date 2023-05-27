export const productReducer = (state,action) => {
    switch (action.type) {
        case "setProducts":
            return {...state,products:action.payload}
        case "setCategories":
            return {...state,categories:action.payload}
        case "setCart":
            return {...state,cart:action.payload}
        case "setWishlist":
            return {...state,wishlist:action.payload}
        default:
            return state
    }
}