import React from "react";

const Dreamcatcher = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "6%",
        left: "20%",
        width: "12%",
        maxWidth: "170px",
        minWidth: "70px",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      <img
        src="/dreamcatcher/dreamcatcher.png"
        alt="Dreamcatcher"
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

export default Dreamcatcher;
