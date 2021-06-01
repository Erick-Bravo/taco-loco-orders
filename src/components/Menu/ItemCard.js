import React, { useEffect } from "react";

const ItemCard = ({ item }) => {



  return (
    <div className="item-card">
        <p>{item.name} - Price ${item.price}</p>
        {item.discount_threshold && <p>Buy {item.discount_threshold} and get {item.discount_percent}% off!</p>}
        <button onClick={() => order.push(item)}>Add to Order</button>
    </div>
  )
};

export default ItemCard