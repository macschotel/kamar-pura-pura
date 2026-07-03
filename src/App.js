import React, { useEffect, useState, useRef } from "react";
import Bedroom from "./components/Bedroom";
import Dreamcatcher from "./components/Dreamcatcher";
import WishModal from "./components/WishModal";
import Vase from "./components/Vase";
import VaseModal from "./components/VaseModal";

import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [wishModal, setWishModal] = useState(false);
  const [vaseModal, setVaseModal] = useState(false);
  const [wishes, setWishes] = useState([]);
  const [selectedWish, setSelectedWish] = useState(null);

  const audioRef = useRef();

  const bgs = ["/background/background.png"];

  const cancerStars = [
    { x: "20%", y: "36%", img: "/stars/bintang-1.png" },
    { x: "35%", y: "48%", img: "/stars/bintang-2.png" },
    { x: "39%", y: "53%", img: "/stars/bintang-3.png" },
    { x: "29%", y: "61%", img: "/stars/bintang-4.png" },
    { x: "67%", y: "57%", img: "/stars/bintang-5.png" },
  ];

  const cancerLines = [
    {
      showAt: 2,
      x: "22%",
      y: "38%",
      img: "/stars/garis-bintang-1.png",
      width: 10,
      maxWidth: 100,
      minWidth: 60,
    },
    {
      showAt: 3,
      x: "38%",
      y: "51%",
      img: "/stars/garis-bintang-2.png",
      width: 3,
      maxWidth: 30,
      minWidth: 10,
    },
    {
      showAt: 4,
      x: "33%",
      y: "56%",
      img: "/stars/garis-bintang-3.png",
      width: 5,
      maxWidth: 50,
      minWidth: 20,
    },
    {
      showAt: 5,
      x: "45%",
      y: "55%",
      img: "/stars/garis-bintang-4.png",
      width: 14,
      maxWidth: 140,
      minWidth: 70,
    },
  ];

  let bg = bgs[0];

  const handleDreamcatcherClick = () => {
    setWishModal(true);
  };

  const handleVaseClick = () => {
    setVaseModal(true);
  };

  const handleSaveWish = async (wishText) => {
    console.log("wishText:", wishText);

    const newWish = {
      wish: wishText,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "wishes"), newWish);
      fetchWishes();
      setWishModal(false);
    } catch (error) {
      console.error("Error adding wish to Firestore: ", error);
    }
  };

  const fetchWishes = async () => {
    const q = query(collection(db, "wishes"), orderBy("createdAt", "asc"));
    const querySnapshot = await getDocs(q);

    const wishList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setWishes(wishList);
  };

  return (
    <Bedroom imagePath={bg}>
      <Dreamcatcher onClick={handleDreamcatcherClick} />
      {wishModal && (
        <WishModal
          onClose={() => setWishModal(false)}
          onSave={handleSaveWish}
          isComplete={wishes.length >= 5}
        />
      )}
      <Vase onClick={handleVaseClick} />
      {vaseModal && <VaseModal onClose={() => setVaseModal(false)} />}

      {cancerLines.map((line, index) => {
        if (wishes.length < line.showAt) return null;

        return (
          <img
            key={index}
            src={line.img}
            alt=""
            style={{
              position: "absolute",
              left: line.x,
              top: line.y,
              width: `${line.width}vw`,
              maxWidth: `${line.maxWidth}px`,
              minWidth: `${line.minWidth}px`,
              height: "auto",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        );
      })}

      {wishes.map((wish, index) => {
        const star = cancerStars[index];
        if (!star) return null;

        return (
          <img
            key={wish.id}
            src={star.img}
            alt=""
            onClick={() => setSelectedWish(wish)}
            style={{
              position: "absolute",
              left: star.x,
              top: star.y,
              cursor: "pointer",
              zIndex: 2,
              width: "2.7vw",
              maxWidth: "40px",
              minWidth: "15px",
            }}
          />
        );
      })}
    </Bedroom>
  );
}

export default App;
