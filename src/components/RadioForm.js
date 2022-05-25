import React from "react";
import RadioInput from "./UI/RadioInput";
import RadioLable from "./UI/RadioLable";

const RadioForm = (props) => {
  return (
    <div className="form-radio">
      <div>
        <RadioInput
          id="Bar"
          value="bar"
          checked={props.type === "bar"}
          onChange={props.onChange}
        />
        <RadioLable htmlFor="Bar">Bar Chart</RadioLable>
      </div>

      <div>
        <RadioInput id="Line" value="line" onChange={props.onChange} />
        <RadioLable htmlFor="Line">Line Chart</RadioLable>
      </div>

      <div>
        <RadioInput id="PolarArea" value="polarArea" onChange={props.onChange} />
        <RadioLable htmlFor="PolarArea">Polar Area Chart</RadioLable>
      </div>
    </div>
  );
};

export default RadioForm;
