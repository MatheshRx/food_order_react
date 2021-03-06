import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
