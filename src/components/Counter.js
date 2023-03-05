import { useSelect } from "@mui/base";
import React, from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/cart";
//import { increment } from "../redux/cart";
//import { DataContext } from "../store/DataContext";
import "./Counter.css";

function Counter({ id }) {
  //let id = props.value;

  const { cartItems = {} } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="counter">
        <ul>
          <li>
            <button onClick={() => disptach(decrement(id))}>-</button>
          </li>
          <li>{cartItems[id] || 0}</li>
          <li>
            <button onClick={() => disptach(increment(id))}>+</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
