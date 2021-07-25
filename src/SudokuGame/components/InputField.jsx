import React from "react";

export default function InputField({ value, index, changeValue }) {
  return (
    <input
      className="input_field"
      value={value ? value : ""}
      onChange={(e) => {
        changeValue(index, e.target.value);
      }}
    />
  );
}
