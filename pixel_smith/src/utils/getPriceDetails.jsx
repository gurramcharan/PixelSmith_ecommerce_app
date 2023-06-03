function getPriceDetails(myCart) {
    const totalPrice = myCart.reduce((acc,curr) => acc + (curr.price * curr.qty),0)
    const discount = myCart.reduce((acc,curr) => curr.discountProduct? acc+((curr.price - curr.discountPrice)*curr.qty):acc,0)
    const delivery = (totalPrice > 10000) ? 0 : 100;
    const discountPrice = totalPrice-discount + delivery;
    return {totalPrice, discount, delivery,discountPrice}
  }
  
  export { getPriceDetails };
