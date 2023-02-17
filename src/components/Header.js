import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="name">Uni-Resto Cafe</h1>
      <h3 className="order">
        My Orders
        <span className="icon">
          <AddShoppingCartIcon />
        </span>
        <span>(6)</span>
      </h3>
    </div>
  );
}

export default Header;
