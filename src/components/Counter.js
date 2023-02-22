import React, { useContext } from "react";
import { DataContext } from "../store/DataContext";
import "./Counter.css";

function Counter({ id }) {
  const { addItem, cart, removeItem } = useContext(DataContext);

  return (
    <div>
      <div className="counter">
        <ul>
          <li>
            <button onClick={() => removeItem(id)}>-</button>
          </li>
          <li>{cart[id] || 0}</li>
          <li>
            <button onClick={() => addItem(id)}>+</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
