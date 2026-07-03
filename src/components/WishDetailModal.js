import React from "react";

const WishDetailModal = ({ wish, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(241, 225, 152, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/wish/postcard-cap-tanpa-teks.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90%",
          maxWidth: "400px",
          height: "90vh",
          padding: "4rem 1.5rem",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "clamp(32%, 33%, 35%)",
            left: "24%",
            width: "clamp(47%, 53%, 55%)",
            height: "clamp(43%, 45%, 55%)",
            overflowY: "auto",
            boxSizing: "border-box",
            paddingRight: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: "1.2",
              marginBottom: "0.5rem",
              wordBreak: "break-word",
              textAlign: "justify",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {wish.wish}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "clamp(8%, 10%, 12%)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src="/button/batal.png"
              alt="Tutup"
              style={{
                width: "clamp(60px, 66px, 75px)",
                height: "auto",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishDetailModal;
