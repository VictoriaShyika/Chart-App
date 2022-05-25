import React from "react";

const RadioInput = (props) => {
  return (
    <input
      className="form-check-input radio-input"
      type="radio"
      name="chart-type"
      {...props}
    />
  );
};

export default RadioInput;
