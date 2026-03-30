import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBullhorn, FaHandsHelping, FaStore, FaUsers, FaNewspaper, FaRegIdCard, FaUsersCog } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";
import FooterNav from "../Components/Footer";

// ===== DATA =====
const berita = [
  {
    id: 1,
    title: "Perbaikan Jalan Desa Mangga",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    time: "30 menit lalu",
  },
  {
    id: 2,
    title: "Bantuan UMKM untuk Warga",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    time: "1 jam lalu",
  },
  {
    id: 3,
    title: "Program Sosial di Desa",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    time: "2 jam lalu",
  },
];

const umkm = [
  {
    id: 1,
    name: "Topi Bordir Lokal",
    price: "Rp 45.000",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Anyaman Rotan Premium",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1685111674777-25bcc8ab3b5d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Jasa Servis AC",
    price: "Rp 50.000",
    image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Kopi Lokal Nusantara",
    price: "Rp 25.000",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Home() {
  const [showKTA, setShowKTA] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openCamera = async () => {
    setShowCamera(true);

    try {
      // ✅ PRIORITAS KAMERA BELAKANG
      let stream;

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } },
        });
      } catch (err) {
        // ❌ Kalau gagal → fallback ke kamera depan
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
      }

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 200);
    } catch (err) {
      alert("Tidak bisa akses kamera");
    }
  };

  const closeCamera = () => {
    setShowCamera(false);

    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
  };
  return (
    <div className="flex justify-center bg-white min-h-screen font-signika">
      <div className="max-w-md max-sm:w-full h-screen bg-[#f5f8ff] flex flex-col">
        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto">
          {/* HEADER */}
          <div className="relative text-white rounded-b-3xl overflow-hidden shadow h-[220px]">
            {/* BG IMAGE */}
            <img src="/images/bghero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-700/70 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 p-4 flex flex-col  h-full">
              {/* TOP PROFILE */}
              <div className="flex items-center gap-3">
                <img src="/images/profile.png" alt="" className="w-10 h-10 rounded-full border-2 border-white" />

                <div className="text-xs">
                  <p className="font-semibold">Ismail</p>
                  <div className="flex items-center gap-1">
                    <span className="bg-white/20 px-2 py-[2px] rounded-full text-[10px]">💙 Lencana PAN</span>
                    <span className="opacity-80">Neo+</span>
                  </div>
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-14">
                <h1 className="text-2xl font-extrabold leading-tight tracking-wide">DPD PAN Kota Dumai</h1>
                <p className="opacity-90 -mt-1">Partai Amanat Nasional</p>
                <p className="text-sm opacity-90 font-edu">Sahabat Rakyat</p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-4 mt-4 pb-20">
            {/* USER CARD (FLOATING) */}
            <div className=" mt-6">
              <div className="bg-white/20 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-lg">
                {/* AVATAR */}
                <img src="/images/profile.png" alt="" className="w-14 h-14 rounded-full border-2 border-white shadow" />

                {/* TEXT */}
                <div className="flex-1">
                  <p className="text-sm font-semibold">Selamat Pagi, Ismail 👋</p>
                  <p className="text-xs opacity-80">Lencana PAN: 500</p>
                </div>

                {/* BADGE */}
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs">⭐ 500</div>
              </div>
            </div>
            {/* MENU */}
            <div className="mt-5 mb-8 w-full">
              <div className="bg-white rounded-2xl shadow-md p-3 grid grid-cols-4 gap-3">
                <Menu to="/berita" icon={<FaNewspaper />} label="Berita" color="bg-blue-500" />

                <Menu to="/aspirasi" icon={<FaBullhorn />} label="Aspirasi" color="bg-green-500" />

                <Menu to="/bantuan" icon={<FaHandsHelping />} label="Bantuan" color="bg-orange-400" />

                <Menu to="/umkm" icon={<FaStore />} label="UMKM" color="bg-yellow-500" />

                <Menu to="/relawan" icon={<FaUsers />} label="Relawan" color="bg-yellow-500" />

                <Menu to="/akun" icon={<FaUsersCog />} label="Akun" color="bg-red-500" />

                {/* ✅ KTA POPUP */}
                <Menu icon={<FaRegIdCard />} label="KTA" color="bg-purple-400" onClick={() => setShowKTA(true)} />

                {/* ✅ SCAN CAMERA */}
                <Menu icon={<BiBarcodeReader />} label="Scan KTA" color="bg-blue-400" onClick={openCamera} />
              </div>
            </div>

            {/* BERITA */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold mb-2 ">Berita & Agenda</h2>
                <Link to={"/berita"}>
                  {" "}
                  <h4 className="text-blue-950 text-sm underline">Lihat Semua {"->"}</h4>
                </Link>
              </div>

              {berita.map((item) => (
                <div key={item.id} className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-32 object-cover" />
                  <div className="p-3">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* UMKM */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold mb-2">UMKM Lokal</h2>
              <Link to={"/umkm"}>
                {" "}
                <h4 className="text-blue-950 text-sm underline">Lihat Semua {"->"}</h4>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {umkm.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-24 object-cover" />
                  <div className="p-2">
                    <p className="text-xs font-semibold">{item.name}</p>
                    <p className="text-xs text-blue-600 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL KTA */}
        {showKTA && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-[90%] max-w-sm shadow-2xl overflow-hidden animate-fadeIn">
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-blue-950">
                <h2 className="text-sm font-semibold">Kartu Tanda Anggota</h2>

                <button onClick={() => setShowKTA(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <img src="/images/kta.png" alt="" className="w-full rounded-xl shadow-md" />
              </div>
            </div>
          </div>
        )}

        {showCamera && (
          <div className="fixed inset-0 z-[9999] bg-black flex flex-col justify-between animate-fadeIn">
            {/* VIDEO BACKGROUND */}
            <div className="relative flex-1">
              <video ref={videoRef} autoPlay className="w-full h-full object-cover" />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50" />

              {/* SCAN FRAME */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-40 border-2 border-white rounded-2xl shadow-lg">
                  {/* SCAN LINE */}
                  <div className="absolute left-0 w-full h-[2px] bg-blue-400 animate-scan" />
                </div>
              </div>

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
                <p className="text-white text-sm font-semibold">Scan KTA</p>

                <button onClick={closeCamera} className="w-10 h-10 bg-white/20 backdrop-blur flex items-center justify-center rounded-full text-white text-lg">
                  ✕
                </button>
              </div>
            </div>

            {/* BOTTOM INFO */}
            <div className="bg-black/80 text-white text-center py-4 text-sm backdrop-blur-md">Arahkan kamera ke kartu KTA</div>
          </div>
        )}

        <FooterNav />
      </div>
    </div>
  );
}

function Menu({ to, icon, label, color, onClick }: any) {
  return (
    <div onClick={onClick}>
      <Link to={to || "#"} className="flex flex-col items-center">
        <div className={`w-[50px] h-[50px] ${color} rounded-xl flex items-center justify-center text-white shadow`}>
          <div className="text-2xl">{icon}</div>
        </div>
        <p className="text-[10px] mt-1 text-center">{label}</p>
      </Link>
    </div>
  );
}
