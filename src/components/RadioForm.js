import React from "react";
import RadioInput from "./UI/RadioInput";
import RadioLable from "./UI/RadioLable";

const CHART_TYPE = ["Line", "PolarArea", "Doughnut"];

const RadioForm = (props) => {
  return (
    <div className="form-radio" style={{ marginTop: "30px" }}>
      <div>
        <RadioInput
          id="Bar"
          value="Bar"
          checked={props.type === "Bar"}
          onChange={props.onChange}
        />
        <RadioLable htmlFor="Bar">Bar Chart</RadioLable>
      </div>

      {CHART_TYPE.map((type) => (
        <div key={type}>
          <RadioInput id={type} value={type} onChange={props.onChange} />
          <RadioLable htmlFor={type}>{type} Chart</RadioLable>
        </div>
      ))}
    </div>
  );
};

export default RadioForm;
