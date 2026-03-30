import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/Pages";
import PageUmkm from "./LandingPage/Pages/umkm/PageUmkm";
import { Aspirasi } from "./LandingPage/Pages/aspirasi/aspirasi";
import { Bantuan } from "./LandingPage/Pages/bantuan/bantuan";
import { Relawan } from "./LandingPage/Pages/relawan/relawan";
import { BeritaPage } from "./LandingPage/Pages/berita/berita";
import AkunPage from "./LandingPage/Pages/akun/akun";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/umkm" element={<PageUmkm />} />
        <Route path="/aspirasi" element={<Aspirasi />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/relawan" element={<Relawan />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/akun" element={<AkunPage />} />
      </Routes>
    </Router>
  );
};

export default App;
