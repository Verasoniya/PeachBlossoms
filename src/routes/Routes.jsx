import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Logo from "../assets/pb-pink-a.png";

function RoutesPeachBlossoms() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div className="flex justify-center content-center">
              <div className="flex flex-col h-screen justify-center ">
                <img src={Logo} alt="Index Image" className="w-20 animate-pulse self-center" />
                <p>Sorry! Page Not Found!</p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPeachBlossoms;
