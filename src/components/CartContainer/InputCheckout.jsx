import React from "react";

function InputCheckout(props) {
  return (
    <div className="grid items-center grid-cols-2 text-center">
      <label className="">{props.title}</label>
      {
      <input
        className="border-2 rounded border-indigo-600 m-2 w-2/3"
        required = "required"
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
      }
    </div>
  );
}

export default InputCheckout;