import React from "react";

const Vase = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        bottom: "4%",
        right: "17%",
        width: "40%",
        maxWidth: "170px",
        minWidth: "70px",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      <img
        src="/vase/vas-bunga.png"
        alt="Vase"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <span
        style={{
          fontSize: "0.8rem",
          color: "#4a4a4a",
        }}
      ></span>
    </div>
  );
};

export default Vase;
