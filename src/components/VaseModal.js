import React from "react";

const contentStyle = {
  position: "absolute",
  top: "27%",
  left: "29%",
  width: "42%",
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

const VaseModal = ({ onClose }) => {
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
          backgroundImage: `url("/greetings/template-greetings.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "min(96vw, 1000px)",
          maxHeight: "92vh",
          aspectRatio: "4 / 3",
          position: "relative",
        }}
      >
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
                fontFamily: "Instrument Serif, serif",
                color: "#2b2330",
                fontSize: "clamp(0.75rem, 1.6vw, 1.1rem)",
                lineHeight: 1.5,
                margin: 0,
                textAlign: "justify",
                fontWeight: "bold",
              }}
            >
              Kepada Kak Anggi alias pacarku yang paling keren sedunia,
              <br></br>
              <br></br>
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#2b2330",
                fontSize: "clamp(0.6rem, 1.3vw, 0.9rem)",
                lineHeight: 1.5,
                margin: 0,
                textAlign: "justify",
              }}
            >
              Selamat ulangtahun! Terima kasih sudah bertahan sampai tahun yang
              ke-31!
              <br></br>
              Terima kasih juga sudah selalu menjadi orang yang hebat, keren,
              kuat, luar biasa meskipun selama 31 tahun kehidupan ini, banyak
              hal yang udah Kak Anggi lewati dan nggak semuanya indah. Terima
              kasih karena nggak menyerah meskipun ada banyak musim hidup yang
              harus dilewati seorang diri. Terima kasih karena selalu berusaha
              menjadi orang yang lebih baik, dan nggak pernah berhenti untuk
              belajar. Aku nggak pernah nggak merasa kagum sama Kak Anggi
              muahahaha.
              <br></br>
              Meskipun aku nggak bisa menjanjikan matahari akan selalu bersinar
              setiap hari, aku nggak bisa janjiin juga kalau hujan nggak akan
              datang, tapi setidaknya mulai tahun ini, dan tahun-tahun
              berikutnya sampai Tuhan masih mengizinkan kita bareng-bareng, aku
              pasti akan selalu nemenin Kak Anggi. Jadi kita nggak harus
              menghadapi jelek-jeleknya kehidupan seorang diri karena kita punya
              satu sama lain. Mulai sekarang, kita berpetulanga bersama ya!
              Yeay.
              <br></br>
              Karena kita bakal melalui perjalanan panjang bersama, Kak Anggi
              nggak barus selalu lari, nggak harus selalu senyum, nggak harus
              selalu kuat, nggak harus selalu tertawa.
              <br></br>
              Mungkin ada kalanya Kak Anggi ngerasa capek, kita bisa berhenti
              sebentar sambil bercanda-bercanda, nonton film bareng, main game,
              atau sekadar bengong lalu tengok ke belakang--ngeliat lagi
              perjalanan yang udah kita tempuh sama-sama. Atau mungkin ada
              waktunya juga Kak Anggi ngerasa sedih karena banyak hal yang nggak
              sesuai harapan. Aku bakal temenin sambil peluk erat terus kita
              emam indomie, atau bolen, atau es krim supaya bisa ketawa lagi!
              Dan ada kalanya juga Kak Anggi marah, atau kesal, atau kecewa.
              Entah karena aku yang bikin pusing, atau karena hidup berjalan
              seperti bakekok. Kalau aku yang bikin Kak Anggi marah, kita bisa
              duduk sebentar dan mengurai pikiran masing-masing, kemudian tengok
              di mana kita bisa memperbaiki hal yang bikin Kak Anggi nggak
              nyaman. Kalau karena kehidupan jelek ini, kita bisa istirahat lagi
              sebentar, terus tengok barangkali ada yang harus diubah dalam
              rencana perjalanan kita.
              <br></br>
              Pokoknya mulai sekarang kita satu tim! Gimana pun musim kehidupan
              yang akan Kak Anggi lewati, aku juga akan berusaha untuk hadir di
              sampingmu uhuy.
              <br></br>
              Dan untuk semua yang akan terjadi di masa depan, aku akan selalu
              mendoakan yang terbaik untuk kebahagiaan Kak Anggi. Aku akan
              selalu berdoa untuk kesehatanmu, masa depanmu, dan berharap semoga
              hanya ada hal-hal baik yang mengikuti Kak Anggi.
              <br></br>
              Sekali lagi, terima kasih sudah mau bertahan sampai hari ini,
              terima kasih sudah jadi orang paling keren sedunia, terima kasih
              sudah hadir di hidupku! Kemarin, hari ini, dan hari-hari
              berikutnya, aku sayang Kak Anggi!!!!
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
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

export default VaseModal;
