import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./components/pages/MainPage/mainPage";
import PreviewPage from "./components/pages/previewPage/PreviewPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<PreviewPage />} />
        <Route exact path="/pokemons" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
