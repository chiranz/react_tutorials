import React from "react";
import "./practice.style.css";

export default function Index() {
  const [show, setShow] = React.useState(false);
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });
  return (
    <div
      className="outer_div"
      onMouseMove={(e) => {
        console.log(e);
        const _coord = {
          x: e.clientX / 5,
          y: e.clientY / 5,
        };
        setShow(true);
        setCoordinates(_coord);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {show ? (
        <div
          className="title"
          style={{ top: coordinates.x, left: coordinates.y }}
        >
          <p>This is body</p>
        </div>
      ) : null}
    </div>
  );
}
