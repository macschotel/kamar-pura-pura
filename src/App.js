import React, { useEffect, useState, useRef } from "react";
import Bedroom from "./components/Bedroom";

import { db } from "./firebase";

const bgs = ["/background/bg-sketch.png"];

let bg = bgs[0];

function App() {
  return <Bedroom imagePath={bg}></Bedroom>;
}

export default App;
