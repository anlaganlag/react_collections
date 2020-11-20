import React from 'react'
import './css/Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    
    return (
        <div className='order'>
            <h2>訂單</h2>
            <p>{moment.unix(order.data.created).format("YYYY年 M月 D日 HH:mm")}</p>
            <p className="order__id">
                <small>訂單號:{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total"> 訂單總金額: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"￥"}
            />   
        </div>
    )
}

export default Order
