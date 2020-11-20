import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              合計 ({basket.length} 件商品): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> 使用優惠券
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"￥"}
      />

      <button onClick={e => history.push('/payment')}>現在結帳</button>
    </div>
  );
}

export default Subtotal;
