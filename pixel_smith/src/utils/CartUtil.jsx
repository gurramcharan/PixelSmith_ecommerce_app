export const getCartProducts = async (encodedToken) => {
    try {
      const res = await fetch("/api/user/cart", {
        headers: { authorization: encodedToken },
      });
      console.log(await res.json())
      if (res.status === 200) {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };