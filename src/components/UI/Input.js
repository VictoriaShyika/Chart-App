import React from "react";

const Input = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.onChangeField(e);
    }
  };
  return (
    <input
      className="form-control input"
      onKeyDown={handleKeyDown}
      {...props}
    ></input>
  );
};

export default Input;
