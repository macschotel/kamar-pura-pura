import React, { useState } from "react";

const WishModal = ({ onClose, onSave }) => {
  const [wish, setWish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wish.trim()) return;
    onSave(wish);
    setWish("");
  };

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
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/wish/template-isi-wish-tanpa-teks.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          maxWidth: "1000px",
          aspectRatio: "4 / 3",
          position: "relative",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "48%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <textarea
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            rows={4}
            placeholder="Tulis harapanmu di sini!"
            style={{
              flex: 0.8,
              width: "100%",
              padding: "3%",
              resize: "none",
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(0.8rem, 1.3vw, 1.1rem)",
              borderRadius: "10px",
              border: "none",
              background: "rgba(228,210,243,0.91)",
              boxSizing: "border-box",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src="/button/kirim.png"
                alt="Tutup"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />
            </button>
            <button
              type="button"
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
                alt="Batal"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishModal;
