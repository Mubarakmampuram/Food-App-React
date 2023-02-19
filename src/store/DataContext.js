import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext([]);

export default function Data({ children }) {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
