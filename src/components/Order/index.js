 import React, { useEffect, useState } from "react";
import "./index.css"

const Order = ({order}) => {

  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    if(order) order.map(item => setTotal(total + item.price))
    }, [order])


  const submitOrder = async() => {
        const response = await fetch("https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({orderItems: order, totalPrice: total})
        })
        const data = await response
        await console.log(data)
  }

  return (
    <div className="order-container">
      <h3>Order</h3>
      {order && order.map(item => {
        return <p>{item.name} - ${item.price}</p>
      })}
      <h4>Total: ${total.toFixed(2)}</h4>
      <button onClick={submitOrder} >Submit Order</button>
    </div>
  )
}

export default Order