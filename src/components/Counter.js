import React from "react";
import "./Counter.css";

function Counter(props) {
  console.log(props.id);
  return (
    <div>
      <div className="counter">
        <ul>
          <li>
            <button>-</button>
          </li>
          <li>5</li>
          <li>
            <button>+</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
