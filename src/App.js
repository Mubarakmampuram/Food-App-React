import "./App.css";
import Header from "./components/Header";
import MyTabs from "./components/MyTabs";
//import { useEffect, useState } from "react";
import Data from "./store/DataContext";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  //console.log(data);

  return (
    <div className="App">
      <Data>
        <Header />
        <MyTabs />
      </Data>
    </div>
  );
}

export default App;
