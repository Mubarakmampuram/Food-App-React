import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import "./Header.css";

//import { DataContext } from "../store/DataContext";
//import BasicModal from "./Modal";

function Header() {
  const { cartItems = {} } = useSelector((state) => state.cart);

  const totalCartCount = Object.values(cartItems).reduce(
    (acc, value) => (acc += value.count),
    0
  );
  if (!data) {
    return null;
  }
  return (
    <div className="header">
      <h1 className="name">{data[0]?.restaurant_name}</h1>
      <h3 className="order">
        My Orders
        <span className="icon">
          <AddShoppingCartIcon />
        </span>
        <span>{totalCartCount}</span>
      </h3>
    </div>
  );
}

export default Header;
