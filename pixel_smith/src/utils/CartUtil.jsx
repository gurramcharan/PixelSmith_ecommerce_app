export const productCheck = (cart,id) => {
  return cart?.find((cartProduct) => cartProduct._id === id) ? true : false;
}

export const getCartProducts = async (encodedToken) => {
    try {
      const res = await fetch("/api/user/cart", {
        headers: { authorization: encodedToken },
      });
      // console.log(await res.json())
      if (res.status === 200) {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
};

export const addToCart = async (item,productDispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch("/api/user/cart",{
      method:"POST",
      headers:{authorization:token},
      body:JSON.stringify({product:item})
    })
    const resJson = await res.json()
    // console.log("Add to cart: ",resJson);
    if(res.status === 201){
      productDispatch({type:"setCart", payload: resJson?.cart})
    }
  } catch (error) {
    console.log(error)
  }
}

export const handleProductQuantity = async (productDispatch,productId,type) => {
  try {
    const token = localStorage.getItem("token")
    const res = await fetch(`api/user/cart/${productId}`,{
      method:"POST",
      headers:{authorization:token},
      body:JSON.stringify({action:{type}}),
    })
    const resJson = await res.json();
    // console.log(res.Json)
    if (res.status === 200) {
      productDispatch({type:"setCart", payload:resJson?.cart})
    }
  } catch (error) {
    console.log(error)
  }
}

export const removeProductFromCart = async (productDispatch,productId) => {
  try {
    const token = localStorage.getItem("token")
    const res = await fetch(`/api/user/cart/${productId}`,{
      method:"DELETE",
      headers:{authorization: token},
    })
    const resJson = await res.json();
    // console.log(resJson)
    if (res.status === 200) {
      productDispatch({type:"setCart",payload:resJson?.cart})
    }
  } catch (error) {
    console.log(error)
  }
}