import React from "react";

const getValue = (targetValue) => {
  let value = +targetValue;
  // const ignore = [null, undefined, "", 0, NaN, false]
  // if (ignore.includes(value)){
  //   return "I don't need this value"
  // }else{
  //   return value
  // }

  if (value < 10 && value > 0) {
    return value;
  }
  return "";
};

export default function InputField({ data, changeValue }) {
  const [value, setValue] = React.useState(data.value ? data.value : "");
  const handleChange = (e) => {
    const _val = getValue(e.target.value);
    setValue(_val);
    changeValue({ ...data, value: _val ? _val : null });
  };
  return (
    <input
      className="input_field"
      value={value}
      onChange={handleChange}
      readOnly={data.readOnly}
      min={1}
      max={9}
    />
  );
}
