import React, { useState } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChartType from "./components/ChartType";
import RadioForm from "./components/RadioForm";
import InputForm from "./components/InputForm";

function App() {
  const [lables, setLables] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
  ]);
  const [data, setData] = useState([1, 5, 10, 1, 2]);
  const [type, setType] = useState("bar");

  const onChangeLables = (e) => {
    setLables(e.target.value.split(",").map((str) => str.trim()));
  };
  const onChangeData = (e) => {
    setData((e.target.value.split(",").map((str) => Number(str.trim()))));
  };


  const onChangeValue = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="App vh-100">
      <InputForm
        onChangeLables={onChangeLables}
        onChangeData={onChangeData}
      />
      <ChartType lables={lables} data={data.slice(0, lables.length)} type={type} />
      <RadioForm type={type} onChange={onChangeValue} />
    </div>
  );
}

export default App;
