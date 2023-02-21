import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext([]);

export default function Data({ children }) {
  const [data, setData] = useState([]);
  //   const [cart, setCart] = useState(
  //     JSON.parse(localStorage.getItem("cart")) || []
  //   );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );
  //   const [dishCount, setDishCount] = useState(0);
  const fetchData = () => {
    axios
      .get("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const addItem = (id) => {
    const a = cart[id] || 0;

    const cartTemp = {
      ...cart,
      [id]: a + 1,
    };
    setCart(cartTemp);

    localStorage.setItem("cart", JSON.stringify(cartTemp));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, addItem, cart }}>
      {children}
    </DataContext.Provider>
  );
}
