import React, { useEffect, useState, useRef } from "react";
import Bedroom from "./components/Bedroom";
import Dreamcatcher from "./components/Dreamcatcher";
import WishModal from "./components/WishModal";
import Vase from "./components/Vase";
import VaseModal from "./components/VaseModal";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [wishModal, setWishModal] = useState(false);
  const [vaseModal, setVaseModal] = useState(false);

  const bgs = ["/background/background.png"];
  const stars = [
    "/stars/bintang-1.png",
    "/stars/bintang-2.png",
    "/stars/bintang-3.png",
    "/stars/bintang-4.png",
    "/stars/bintang-5.png",
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

    const snapshot = await getDocs(collection(db, "wishes"));
    const index = snapshot.size;

    // const stars = getStars();

    const newWish = {
      wish: wishText,
      starIndex: index,
    };

    try {
      await addDoc(collection(db, "wishes"), newWish);
      // fetchWishes();
      setWishModal(false);
    } catch (error) {
      console.error("Error adding wish to Firestore: ", error);
    }
  };

  return (
    <Bedroom imagePath={bg}>
      <Dreamcatcher onClick={handleDreamcatcherClick} />
      {wishModal && (
        <WishModal
          onClose={() => setWishModal(false)}
          onSave={handleSaveWish}
        />
      )}
      <Vase onClick={handleVaseClick} />
      {vaseModal && <VaseModal onClose={() => setVaseModal(false)} />}
    </Bedroom>
  );
}

export default App;
