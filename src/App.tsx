import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/Pages";
import PageUmkm from "./LandingPage/Pages/umkm/PageUmkm";
import { Aspirasi } from "./LandingPage/Pages/aspirasi/aspirasi";
import { Bantuan } from "./LandingPage/Pages/bantuan/bantuan";
import { Relawan } from "./LandingPage/Pages/relawan/relawan";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/umkm" element={<PageUmkm />} />
        <Route path="/aspirasi" element={<Aspirasi />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/relawan" element={<Relawan />} />
      </Routes>
    </Router>
  );
};

export default App;
