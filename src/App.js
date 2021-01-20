import React, { useState } from "react";
import Header from "./Header";
import DrinkSelector from "./DrinkSelector";
import Cart from './Cart'
import coffeeData from "./data/coffeeTypes.json";
import extrasData from "./data/extras.json";

function App() {
  const [coffeeTypes, setCoffeeTypes] = useState(coffeeData);
  const [extras, setExtras] = useState(extrasData);

  const [selectedCoffee, setSelectedCoffee] = useState("");
  const [selectedExtra, setSelectedExtra] = useState("");
  const [total, setTotal] = useState(0)

  const handleSelectedCoffee = (drink) => setSelectedCoffee(drink);
  const handleSelectedExtra = (extra) => setSelectedExtra(extra);

  return (
    <div className="App">
      <Header />
      <Cart drink={selectedCoffee} extra={selectedExtra} total={total}/>
      <DrinkSelector drinkTypes={coffeeTypes} handle={handleSelectedCoffee} />
      <DrinkSelector drinkTypes={extras} handle={handleSelectedExtra} />
    </div>
  );
}

export default App;
