import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <h2>Coffee Machine</h2>
      </div>
      <div>
        <h2>Total: {props.total}€</h2>
      </div>
    </div>
  );
};

export default Header;
