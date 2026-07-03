import React, { useState } from "react";

const VaseModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/greetings/template-greetings.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90%",
          maxWidth: "420px",
          aspectRatio: "3 / 4", // biar proporsional di semua layar
          padding: "3rem 2rem",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Isi Teks */}
        <div
          style={{
            position: "absolute",
            top: "clamp(20%, 35%, 80%)",
            left: "20%",
            width: "60%",
            height: "40%",
            overflowY: "auto",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: "1.2",
              marginBottom: "0.5rem",
              wordBreak: "break-word",
              textAlign: "justify",
            }}
          >
            Hi, semoga kamu selalu sehat dan bahagia. Semoga semua impianmu
            tercapai dan selalu dikelilingi oleh orang-orang yang mencintaimu.
            Tetap semangat dan jangan pernah menyerah!
          </p>
        </div>

        {/* Tombol */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Tutup */}
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src="/button/batal.png"
              alt="Tutup"
              style={{ width: "clamp(50px, 7vw, 65px)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaseModal;
