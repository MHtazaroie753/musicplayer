import React from "react";
import ReactLoading from "react-loading";
export default function Loader({ type, width, height, color }) {
  return (
    <div className="loading-wrapper">
      <ReactLoading type={type} width={width} height={height} color={color} />
    </div>
  );
}
Loader.defaultProps = {
  type: "spin",
  color: "blue",
  width: "100px",
  height: "100px",
};
