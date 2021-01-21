import React, { useState, useEffect } from "react";
import Header from "./Header";
import DrinkSelector from "./DrinkSelector";
import Cart from './Cart'
import coffeeTypes from "./data/coffeeTypes.json";
import extras from "./data/extras.json";

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState("");
  const [selectedExtra, setSelectedExtra] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal(selectedCoffee, selectedExtra);
  }, [selectedCoffee, selectedExtra])

  const getTotal = (coffee, extra) => {
    const getSelectedCoffeeObj = Object.assign({"price": 0}, coffeeTypes.find(coffee => coffee.name === selectedCoffee));
    const getSelectedExtraObj = Object.assign({"price": 0}, extras.find(extra => extra.name === selectedExtra));
    const init = 0

    setTotal((init + getSelectedCoffeeObj.price + getSelectedExtraObj.price).toFixed(2))

  }

  return (
    <div className="App">
      <Header />
      <Cart drink={selectedCoffee} extra={selectedExtra} total={total} />
      <DrinkSelector drinkTypes={coffeeTypes} handle={setSelectedCoffee}/>
      <DrinkSelector drinkTypes={extras} handle={setSelectedExtra}/>
    </div>
  );
}

export default App;
