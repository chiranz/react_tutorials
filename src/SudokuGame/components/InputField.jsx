import React from "react";

export default function InputField({ data, changeValue }) {
  return (
    <input
      className="input_field"
      value={data.value ? data.value : ""}
      onChange={(e) => {
        changeValue({ ...data, value: e.target.value });
      }}
      readOnly={data.readOnly}
      min={1}
      max={9}
    />
  );
}
