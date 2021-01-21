import React from "react";

const DrinkSelector = (props) => {
  const drinkTypes = props.drinkTypes;
  const handleItem = props.handle

  const handleChange = (e) => {
      handleItem(e.target.value)
  }

  return (
    <div className="selector">
      <select onChange={handleChange}>
        {drinkTypes.map((item) => {
          console.log(item.price)
          return <option id={item.name} value={item.name}>{item.name} for {item.price.toFixed(2)}€</option>;
        })}
      </select>
    </div>
  );
};

export default DrinkSelector;
