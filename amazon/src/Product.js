import React from "react";
import "./css/Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();




  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(basket));

  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_,i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>加入購物車</button>
    </div>
  );
}

export default Product;
