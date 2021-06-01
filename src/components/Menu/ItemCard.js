import React from "react";

const ItemCard = ({item}) => {

  return (
    <div className="item-card">
        <p>{item.name} Price ${item.price}</p>
        {item.discount_threshold && <p>Buy {item.discount_threshold} and get {item.discount_percent}% off!</p>}
    </div>
  )
};

export default ItemCard