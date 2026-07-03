import React, { useState } from "react";

const WishModal = ({ onClose, onSave, isComplete }) => {
  const [wish, setWish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wish.trim()) return;
    onSave(wish);
    setWish("");
  };

  const contentStyle = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "min(40%, 520px)",
    height: "50%",
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

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(214, 199, 238, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        padding: "clamp(12px, 3vw, 32px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundImage: `url("/wish/template-isi-wish-tanpa-teks.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "min(96vw, 1000px)",
          maxHeight: "92vh",
          aspectRatio: "4 / 3",
          position: "relative",
        }}
      >
        {!isComplete ? (
          <form onSubmit={handleSubmit} style={contentStyle}>
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="Tulis harapanmu di sini!"
              style={{
                width: "100%",
                height: "72%",
                padding: "clamp(10px, 2vw, 20px)",
                resize: "none",
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.75rem, 1.6vw, 1.1rem)",
                lineHeight: 1.5,
                borderRadius: "clamp(8px, 1.5vw, 14px)",
                border: "none",
                background: "rgba(228,210,243,0.91)",
                boxSizing: "border-box",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(16px, 4vw, 48px)",
                width: "100%",
              }}
            >
              <button type="submit" style={buttonStyle}>
                <img
                  src="/button/kirim.png"
                  alt="Kirim"
                  style={buttonImageStyle}
                />
              </button>

              <button type="button" onClick={onClose} style={buttonStyle}>
                <img
                  src="/button/batal.png"
                  alt="Batal"
                  style={buttonImageStyle}
                />
              </button>
            </div>
          </form>
        ) : (
          <div style={contentStyle}>
            <div
              style={{
                width: "100%",
                overflowY: "auto",
                padding: "0 2%",
                boxSizing: "border-box",
              }}
            >
              <h2
                style={{
                  fontFamily: "Instrument Serif, serif",
                  color: "#2b2330",
                  fontSize: "clamp(1rem, 2.4vw, 1.8rem)",
                  lineHeight: 1.25,
                  margin: "0 0 clamp(10px, 1.5vw, 20px)",
                  textAlign: "center",
                }}
              >
                Konstelasi bintang Cancer sudah lengkap!
              </h2>

              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#2b2330",
                  fontSize: "clamp(0.75rem, 1.6vw, 1.1rem)",
                  lineHeight: 1.6,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Terima kasih telah menitipkan harapanmu. Sekarang harapan itu
                sudah hidup bersama para bintang di angkasa!
              </p>
            </div>

            <button type="button" onClick={onClose} style={buttonStyle}>
              <img
                src="/button/batal.png"
                alt="Close"
                style={buttonImageStyle}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishModal;
