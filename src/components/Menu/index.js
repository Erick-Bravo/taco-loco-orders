import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"
import "./index.css";
//here fetch the menu through the api.
//see if you can set to a let variable.
//my guess, is that useState saves state througout?



const Menu = () => {

  const [ menu, setMenu ] = useState("");

  useEffect(async () => {
    const response = await fetch("https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/menu")
    const data = await response.json();
    await setMenu(data)
  },[])

  console.log(menu)

  return (
    <div id="menu-container">
      <h2>Taco Loco Menu</h2>
      {menu && menu.map(item => {
        return <ItemCard item={item} />
      })}
    </div>
  )
};

export default Menu