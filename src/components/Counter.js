import React from "react";
import "./Counter.css";

function Counter() {
  return (
    <div>
      <div className="counter">
        <ul>
          <li>
            <button>+</button>
          </li>
          <li>5</li>
          <li>
            <button>-</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
