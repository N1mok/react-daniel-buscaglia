import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { ItemListContainer } from "./components/itemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
