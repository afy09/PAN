import FooterNav from "../../Components/Footer";
import { FaUserEdit, FaHistory, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function AkunPage() {
  return (
    <>
      <div className="flex justify-center bg-white min-h-screen font-signika">
        <div className="max-w-md w-full bg-[#f5f8ff] min-h-screen pb-24">
          {/* HEADER */}
          <div className="relative h-[220px] rounded-b-3xl overflow-hidden">
            <img src="/images/gedung.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-500/80" />

            {/* PROFILE */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <img src="/images/profile.png" alt="" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" />

              <h1 className="mt-3 text-lg font-bold">Ismail</h1>
              <p className="text-xs opacity-80">Relawan Aktif</p>

              <div className="mt-2 bg-white/20 px-3 py-1 rounded-full text-xs">⭐ 500 Poin</div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-4 mt-6 space-y-3">
            {/* MENU ITEM */}
            <Menu icon={<FaUserEdit />} label="Edit Profil" />
            <Menu icon={<FaHistory />} label="Riwayat Aktivitas" />
            <Menu icon={<FaCog />} label="Pengaturan" />

            {/* LOGOUT */}
            <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-2xl flex items-center justify-center gap-2 shadow hover:bg-red-600 transition">
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </div>

      <FooterNav />
    </>
  );
}

function Menu({ icon, label }: any) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl">{icon}</div>
        <p className="text-sm font-medium">{label}</p>
      </div>

      <span className="text-gray-400 text-sm">›</span>
    </div>
  );
}
