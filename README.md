# taco-loco-orders

## To Start This App
- npm install or yarn add
- npm run

## Features
Customers can:
- Display of Menu
- Add item/s to their order
- Send the order to taco-loco
- Display estimated wait time to pick up the order

## Stretch Goals
- If order is placed after hours, error is shown "Sorry, Taco-Loco is closed"
- Menu items should be grouped by category
- Apply a discount when certain quantities are reached.
    - Does this mean, apply discount to the entire order?
    - Or just the same items.

## API
- https://app.swaggerhub.com/apis-docs/Detroit_Labs/Taco_Truck/1.0.0

Display Menu
- /menu (GET)

Submit Order
- /order (POST)


## Plan
First
- install react-router-dom

## Components

- <Root>
- <App> 
- NavLink to="/" <MenuPage>
- NavLink to = "/order"  <Order>
