export const wishlistCheck = (wishlist, id) => {
    return wishlist
        ?.find((wishlistProduct) => wishlistProduct._id === id)
            ? true
            : false;
}

export const getWishlistProducts = async (encodedToken) => {
    try {
        const res = await fetch("/api/user/wishlist",{
            method:"GET",
            headers: {authorization: encodedToken}
        })
        if (res.status === 200) {
            return res;
        }
    } catch (error) {
        console.log(error)
    }
}

export const addToWishlist = async (item,productDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const res = await fetch("/api/user/wishlist",{
            method:"POST",
            headers:{authorization:token},
            body:JSON.stringify({product:item})
        })
        const resJson = await res.json()
        if(res.status === 201){
            productDispatch({type:"setWishlist",payload:resJson?.wishlist})
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeProductFromWishlist = async (productDispatch, productId) => {
    try {
        const token = localStorage.getItem("token")
        const res = await fetch(`/api/user/wishlist/${productId}`,{
            method:"DELETE",
            headers:{authorization:token},
        })
        const resJson = await res.json()
        if (res.status === 200) {
            productDispatch({type:"setWishlist",payload:resJson?.wishlist})
        }
    } catch (error) {
        console.log(error)
    }
}