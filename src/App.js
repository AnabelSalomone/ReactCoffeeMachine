import React, { useState, useEffect } from "react";
import Header from "./Header";
import DrinkSelector from "./DrinkSelector";
import Cart from "./Cart";
import ConfirmationButton from "./ConfirmationButton";
import coffeeTypes from "./data/coffeeTypes.json";
import extras from "./data/extras.json";

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState("");
  const [selectedExtra, setSelectedExtra] = useState("");
  const [currentTotal, setCurrentTotal] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);

  const getCurrentTotal = (coffee, extra) => {
    const getSelectedCoffeeObj = Object.assign(
      { price: 0 },
      coffeeTypes.find((coffee) => coffee.name === selectedCoffee)
    );
    const getSelectedExtraObj = Object.assign(
      { price: 0 },
      extras.find((extra) => extra.name === selectedExtra)
    );
    const init = 0;

    setCurrentTotal(
      (init + getSelectedCoffeeObj.price + getSelectedExtraObj.price).toFixed(2)
    );
  };

  const submitOrder = (currentTotalOrder, newOrder) => {
    setTotalOrder((parseFloat(currentTotalOrder) + parseFloat(newOrder)).toFixed(2))
    setSelectedCoffee("");
    setSelectedExtra("");
  }

  useEffect(() => {
    getCurrentTotal(selectedCoffee, selectedExtra);
  }, [selectedCoffee, selectedExtra]);

  return (
    <div className="App">
      <Header total={totalOrder} />
      <Cart drink={selectedCoffee} extra={selectedExtra} total={currentTotal} wholeTotal={totalOrder}/>
      <DrinkSelector drinkTypes={coffeeTypes} handle={setSelectedCoffee} selected={selectedCoffee} />
      <DrinkSelector drinkTypes={extras} handle={setSelectedExtra} selected={selectedExtra} />
      <ConfirmationButton
        handle={submitOrder}
        total={totalOrder}
        newValue={currentTotal}
      />
    </div>
  );
}

export default App;
