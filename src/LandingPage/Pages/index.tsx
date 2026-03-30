import { Link } from "react-router-dom";
import { FaBullhorn, FaHandsHelping, FaStore, FaUsers } from "react-icons/fa";
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
  return (
    <div className="flex justify-center bg-white min-h-screen font-signika">
      <div className="max-w-md max-sm:w-full h-screen bg-[#f5f8ff] flex flex-col">
        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto">
          {/* HEADER */}
          <div className="relative text-white rounded-b-3xl overflow-hidden shadow">
            {/* BG IMAGE */}
            <img src="/images/gedung.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/70 to-blue-500/80 backdrop-blur-sm" />

            {/* CONTENT */}
            <div className="relative z-10 pb-10">
              {/* TOP HEADER */}
              <div className="sticky top-0 z-20 px-4 pt-3 pb-3 backdrop-blur-md bg-white/10 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src="/images/pan.png" alt="" className="w-10 h-12 object-contain" />

                  <div>
                    <h1 className="text-2xl font-bold tracking-wide">PAN Peduli</h1>
                    <p className="text-xs opacity-80">Sahabat Rakyat</p>
                  </div>
                </div>
              </div>

              {/* USER CARD (FLOATING) */}
              <div className="px-4 mt-6">
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
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-4 mt-4 pb-20">
            {/* MENU */}
            <div className="my-5 w-full">
              <div className="bg-white rounded-2xl shadow-md p-3 grid grid-cols-4 gap-3">
                <Menu to="/aspirasi" icon={<FaBullhorn />} label="Aspirasi" color="bg-blue-500" />
                <Menu to="/bantuan" icon={<FaHandsHelping />} label="Bantuan" color="bg-orange-400" />
                <Menu to="/umkm" icon={<FaStore />} label="UMKM" color="bg-yellow-500" />
                <Menu to="/relawan" icon={<FaUsers />} label="Relawan" color="bg-blue-400" />
              </div>
            </div>

            {/* BERITA */}
            <div className="flex items-center justify-between">
              <h2 className="font-semibold mb-2">Berita & Agenda</h2>
              <h4 className="text-blue-950 text-sm">Lihat Semua {"->"}</h4>
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

            {/* UMKM */}
            <div className="flex items-center justify-between">
              <h2 className="font-semibold mb-2">UMKM Lokal</h2>
              <h4 className="text-blue-950 text-sm">Lihat Semua {"->"}</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
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

        <FooterNav />
      </div>
    </div>
  );
}

function Menu({ to, icon, label, color }: any) {
  return (
    <Link to={to} className="flex flex-col items-center">
      <div className={`w-[75px] h-[75px] ${color} rounded-xl flex items-center justify-center text-white shadow`}>
        {" "}
        <div className="text-4xl">{icon}</div>{" "}
      </div>
      <p className="text-[10px] mt-1 text-center">{label}</p>
    </Link>
  );
}
