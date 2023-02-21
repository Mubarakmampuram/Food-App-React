import React, { useContext } from "react";
import { DataContext } from "../store/DataContext";
import "./Counter.css";

function Counter({ id }) {
  const { addItem, cart } = useContext(DataContext);

  // const [dishCount, setDishCount] = useState(0);
  // const addItem = (id) => {
  //   console.log(id);
  //   setDishCount(dishCount + 1);
  //   const count = {
  //     id,
  //     dishCount,
  //   };
  //   localStorage.setItem("count", JSON.stringify(count));
  // };
  // const removeItem = (id) => {
  //   if (dishCount) {
  //     setDishCount(dishCount - 1);
  //   }
  // };

  return (
    <div>
      <div className="counter">
        <ul>
          <li>
            <button>-</button>
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
