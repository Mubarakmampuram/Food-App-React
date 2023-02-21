import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import "./Header.css";
import { DataContext } from "../store/DataContext";

function Header() {
  const { data, cart } = useContext(DataContext);
  console.log(data);
  // console.log(data[0].restaurant_name);
  // console.log(data[0].table_menu_list);
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
        <span>
          {Object.values(cart).reduce((acc, cv) => {
            return (acc += cv);
          }, 0)}
        </span>
      </h3>
    </div>
  );
}

export default Header;
