import React from "react";

const RadioLable = ({props, children}) => {
  return (
    <label className="form-check-label text-black px-1" {...props}>
      {children}
    </label>
  );
};

export default RadioLable;
