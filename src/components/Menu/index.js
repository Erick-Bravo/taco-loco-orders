import React, { useState, useEffect } from "react";
import Order from "../Order"
import "./index.css";
//here fetch the menu through the api.
//see if you can set to a let variable.
//my guess, is that useState saves state througout?

const ItemCard = ({ item, order, setOrder }) => {

  return (
    <div className="item-card">
        <p>{item.name} - Price ${item.price}</p>
        {item.discount_threshold && <p>Buy {item.discount_threshold} and get {item.discount_percent}% off!</p>}
        <button onClick={() => setOrder([...order, item])}>Add to Order</button>
    </div>
  )
};



const Menu = () => {

  const [menu, setMenu] = useState("");
  const [tacos, setTacos] = useState("");
  const [drinks, setDrinks] = useState("");
  const [order, setOrder] = useState("")
  // const order = []

  //Fetch Menu
  useEffect(() => {
  (async function fetchData() {
    const response = await fetch("https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/menu")
    const data = await response.json();
    await setMenu(data)
    })()
  }, [])

  //Filter Tacos and Drinks from menu
  useEffect(() => {
    if (menu) {
      const tacos = menu.filter(item => item.category === "Tacos")
      setTacos(tacos);
      const drinks = menu.filter(item => item.category === "Drinks")
      setDrinks(drinks);
    }
  }, [menu])


  return (
    <>
      <div id="menu-container">
        <h2>Taco Loco Menu</h2>
        <h3>Tacos</h3>
        {tacos && tacos.map(item => {
          return <ItemCard item={item} order={order} setOrder={setOrder} key={item.id} />
        })}
        <h3>Drinks</h3>
        {drinks && drinks.map(item => {
          return <ItemCard item={item} order={order} setOrder={setOrder} key={item.id} />
        })}
      </div>

      <Order order={order} />

    </>
  )
};

export default Menu