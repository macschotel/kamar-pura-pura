import React from "react";

const Vase = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        bottom: "clamp(12px, 4vh, 40px)",
        right: "clamp(20px, 17vw, 180px)",
        width: "clamp(80px, 15vw, 180px)",
        maxWidth: "170px",
        minWidth: "50px",
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
