import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#111111] flex justify-center items-start relative">
      {/* Navigation bar */}
      <Nav />

      {/* Route content */}
      <div className="mt-24">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/projects" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
