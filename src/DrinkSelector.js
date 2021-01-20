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
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>
    </div>
  );
};

export default DrinkSelector;
