// This is a dummy file just to store code for checking. Don't use this or get confused about the usecase of this file.

// first temp


        <div>
            {filterProduct.map((item) => (
              <div>
                  <Link to="/products">Go Back</Link>
                <div>
                    <div>
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <div>
                        <p>{item.discountProduct? `${item.discountPrice}` : ""}</p>
                        <p className={item.discountProduct ? 'price-discount':null}>{item.price}</p>
                        </div>
                        <p>Color: {item.color}</p>
                        <p>Company: {item.company}</p>
                        <p>Sold By: {item.seller}</p>
                        <p>Rating: {item.rating}</p>
                        <p>Warranty: {item.warranty}</p>
                        {item
                            .features
                            .map((feature) => (
                                <div>
                                    <p>{feature}</p>
                                </div>
                            ))}
                        <div>
                            <p>{(item.outOfStock)
                                    ? "Out Of Stock"
                                    : "In Stock"}
                            </p>
                            <p>{item.fastDelivery
                                    ? "Fast Delivery"
                                    : ""}</p>
                            <p>{item.table
                                    ? "TableTop Mounting"
                                    : ""}</p>
                            <p>{item.wallMount
                                    ? "Wall Mountable"
                                    : ""}</p>
                        </div>
                        <div>
                            <p>Tilt: {item.tilt
                                    ? "yes"
                                    : "no"}</p>
                            <p>Vertical Roatation: {item.verticalRotation
                                    ? "yes"
                                    : "no"}</p>
                            <p>Height Adjustable: {item.heightAdjustable
                                    ? "yes"
                                    : "no"}</p>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>


// 2nd temp

return (
    <div className="product-container">
      {filterProduct.map((item) => (
        <div key={item._id} className="product-details">
          <Link to="/products" className="go-back-link">
            Go Back
          </Link>
          <div className="product-image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="product-info">
            <p className="product-title">{item.title}</p>
            <p className="product-category">{item.category}</p>
            <div className="product-prices">
              {item.discountProduct ? (
                <div>
                  <p className="discount-price">{item.discountProduct ? `${item.discountPrice}`:`${item.price}`} <span className="discount-percentage">
                      {calculateDiscountPercentage(item.price, item.discountPrice)}% off
                    </span></p>
                  <p className='original-price'>
                    {item.price}
                  </p>
                </div>
              ) : (
                <p className="original-price">{item.price}</p>
              )}
            </div>
            <p className="product-color">Color: {item.color}</p>
            <p className="product-company">Company: {item.company}</p>
            <p className="product-seller">Sold By: {item.seller}</p>
            <p className="product-rating">Rating: {item.rating}</p>
            <p className="product-warranty">Warranty: {item.warranty}</p>
            {item.features.map((feature, index) => (
              <div key={index} className="product-feature">
                <p>{feature}</p>
              </div>
            ))}
            <div className="product-stock-details">
              <p className="stock-status">{item.outOfStock ? 'Out Of Stock' : 'In Stock'}</p>
              {item.fastDelivery && <p className="fast-delivery">Fast Delivery</p>}
              {item.table && <p className="table-mount">TableTop Mounting</p>}
              {item.wallMount && <p className="wall-mount">Wall Mountable</p>}
            </div>
            <div className="product-options">
              <p className="option-tilt">Tilt: {item.tilt ? 'yes' : 'no'}</p>
              <p className="option-rotation">Vertical Rotation: {item.verticalRotation ? 'yes' : 'no'}</p>
              <p className="option-adjustable">Height Adjustable: {item.heightAdjustable ? 'yes' : 'no'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


  ///temp css
  /* CSS File */

/* Container styles */
// .product-container {
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   /* Go Back link styles */
//   .go-back-link {
//     margin-bottom: 20px;
//     color: #007bff;
//     text-decoration: none;
//   }
  
//   /* Product details styles */
//   .product-details {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     max-width: 600px;
//     margin-bottom: 30px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     border-radius: 4px;
//     background-color: #ffffff;
//   }
  
//   /* Product image styles */
//   .product-image {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 20px;
//   }
  
//   .product-image img {
//     max-width: 100%;
//     max-height: 400px;
//   }
  
//   /* Product info styles */
//   .product-info {
//     width: 100%;
//   }
  
//   .product-title {
//     font-size: 24px;
//     font-weight: bold;
//     margin-bottom: 10px;
//   }
  
//   .product-category {
//     font-size: 14px;
//     color: #666666;
//     margin-bottom: 10px;
//   }
  
//   .product-prices {
//     display: flex;
//     align-items: baseline;
//     margin-bottom: 10px;
//   }
  
//   .discount-price {
//     font-size: 18px;
//     font-weight: bold;
//     color: #198c17;
//     margin-right: 10px;
//   }
  
//   .original-price {
//     font-size: 16px;
//     color: #666666;
//     text-decoration: line-through;
//   }
  
//   .discount-percentage {
//     font-size: 12px;
//     font-weight: bold;
//     color: #ff0000;
//   }
  
//   .product-color,
//   .product-company,
//   .product-seller,
//   .product-rating,
//   .product-warranty {
//     font-size: 14px;
//     margin-bottom: 5px;
//   }
  
//   .product-feature {
//     font-size: 14px;
//     margin-bottom: 5px;
//   }
  
//   /* Product stock details styles */
//   .product-stock-details {
//     display: flex;
//     flex-wrap: wrap;
//     margin-bottom: 10px;
//   }
  
//   .stock-status {
//     font-size: 14px;
//     margin-right: 10px;
//   }
  
//   .fast-delivery,
//   .table-mount,
//   .wall-mount {
//     font-size: 14px;
//     margin-right: 10px;
//     color: #00cc00;
//   }
  
//   /* Product options styles */
//   .product-options {
//     display: flex;
//     flex-wrap: wrap;
//   }
  
//   .option-tilt,
//   .option-rotation,
//   .option-adjustable {
//     font-size: 14px;
//     margin-right: 10px;
//   }
  
//   /* Responsive styles */
//   @media screen and (max-width: 768px) {
//     .product-details {
//       flex-direction: column;
//       align-items: flex-start;
//     }
  
//     .product-image {
//       order: 2;
//       margin-bottom: 10px;
//     }
  
//     .product-info {
//       order: 1;
//     }
  
//     .product-title {
//       font-size: 20px;
//       margin-bottom: 5px;
//     }
  
//     .product-category {
//       font-size: 12px;
//       margin-bottom: 5px;
//     }
  
//     .product-prices {
//       margin-bottom: 5px;
//     }
  
//     .discount-price {
//       font-size: 16px;
//       margin-right: 5px;
//     }
  
//     .original-price {
//         font-size: 14px;
//         color: #666666;
//         text-decoration: line-through;
//       }
    
//       .discount-percentage {
//         font-size: 12px;
//         font-weight: bold;
//         color: #ff0000;
//       }
    
//       .product-color,
//       .product-company,
//       .product-seller,
//       .product-rating,
//       .product-warranty {
//         font-size: 14px;
//         margin-bottom: 5px;
//       }
    
//       .product-feature {
//         font-size: 14px;
//         margin-bottom: 5px;
//       }
    
//       /* Product stock details styles */
//       .product-stock-details {
//         display: flex;
//         flex-wrap: wrap;
//         margin-bottom: 10px;
//       }
    
//       .stock-status {
//         font-size: 14px;
//         margin-right: 10px;
//       }
    
//       .fast-delivery,
//       .table-mount,
//       .wall-mount {
//         font-size: 14px;
//         margin-right: 10px;
//         color: #00cc00;
//       }
    
//       /* Product options styles */
//       .product-options {
//         display: flex;
//         flex-wrap: wrap;
//       }
    
//       .option-tilt,
//       .option-rotation,
//       .option-adjustable {
//         font-size: 14px;
//         margin-right: 10px;
//       }
    
//       /* Responsive styles */
//       @media screen and (max-width: 768px) {
//         .product-details {
//           flex-direction: column;
//           align-items: flex-start;
//         }
    
//         .product-image {
//           order: 2;
//           margin-bottom: 10px;
//         }
    
//         .product-info {
//           order: 1;
//         }
    
//         .product-title {
//           font-size: 20px;
//           margin-bottom: 5px;
//         }
    
//         .product-category {
//           font-size: 12px;
//           margin-bottom: 5px;
//         }
    
//         .product-prices {
//           margin-bottom: 5px;
//         }
    
//         .discount-price {
//           font-size: 16px;
//           margin-right: 5px;
//         }
    
//         .original-price {
//           font-size: 14px;
//           text-decoration: line-through;
//         }
    
//         .discount-percentage {
//           font-size: 12px;
//         }
    
//         .product-color,
//         .product-company,
//         .product-seller,
//         .product-rating,
//         .product-warranty {
//           font-size: 12px;
//           margin-bottom: 3px;
//         }
    
//         .product-feature {
//           font-size: 12px;
//           margin-bottom: 3px;
//         }
    
//         .product-stock-details {
//           margin-bottom: 5px;
//         }
    
//         .stock-status,
//         .fast-delivery,
//         .table-mount,
//         .wall-mount {
//           font-size: 12px;
//           margin-right: 5px;
//         }
    
//         .option-tilt,
//         .option-rotation,
//         .option-adjustable {
//           font-size: 12px;
//           margin-right: 5px;
//         }
//       }
//     }
    
  
// login Page css:



useEffect(() => {
  const setCartProuct = async () => {
    try {
      const cartResponse = await getCartProducts(encodedToken);
      const cartJSonResponse = await cartResponse.json();
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

  getProducts();
  getCategories();
  !authState?.token && clearCart();
  authState?.token && setCartProuct();
}, [productDispatch, authState?.token, encodedToken]);


const getCartProducts = async (encodedToken) => {
  try {
    const res = await fetch("/api/user/cart", {
      headers: { authorization: encodedToken },
    });
    if (res.status === 200) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};