import React from "react";

const contentStyle = {
  position: "absolute",
  top: "27%",
  left: "10%",
  width: "80%",
  height: "45%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
};

const buttonStyle = {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
};

const buttonImageStyle = {
  width: "clamp(70px, 12vw, 120px)",
  height: "auto",
};

const WishDetailModal = ({ wish, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(214, 199, 238, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "clamp(300px, 90vw, 500px)",
          flexShrink: 0,
        }}
      >
        <img
          src="/wish/postcard-cap-tanpa-teks.png"
          alt=""
          style={{
            width: "100%",
            display: "block",
          }}
        />
        <div style={contentStyle}>
          <div
            style={{
              width: "100%",
              overflowY: "auto",
              padding: "0 2%",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#2b2330",
                fontSize: "clamp(0.75rem, 1.6vw, 1.1rem)",
                lineHeight: 1.5,
                margin: 0,
                textAlign: "justify",
              }}
            >
              {wish.wish}
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(30%, 520px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <button type="button" onClick={onClose} style={buttonStyle}>
            <img src="/button/batal.png" alt="Close" style={buttonImageStyle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishDetailModal;
