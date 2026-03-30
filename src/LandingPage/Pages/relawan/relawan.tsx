import { Link } from "react-router-dom";
import FooterNav from "../../Components/Footer";

export function Relawan() {
  const data = [
    { name: "Ahmad Fauzi", phone: "08123456789", role: "Koordinator Lapangan" },
    { name: "Budi Santoso", phone: "08234567890", role: "Relawan Sosial" },
    { name: "Siti Aminah", phone: "08345678901", role: "Relawan Kesehatan" },
    { name: "Dewi Lestari", phone: "08456789012", role: "Relawan Pendidikan" },
  ];

  return (
    <>
      <div className="flex justify-center bg-white min-h-screen font-signika">
        <div className="max-w-md w-full bg-[#f5f8ff] min-h-screen pb-24">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-400 text-white p-4 rounded-b-3xl shadow flex items-center gap-3">
            <div>
              <img src="/images/pan.png" alt="" className="w-8 h-10 object-contain" />
            </div>

            <div>
              <h1 className="text-lg font-bold">Relawan</h1>
              <p className="text-xs opacity-80">Hubungi relawan terdekat 🤝</p>
            </div>
          </div>

          {/* LIST */}
          <div className="p-4 space-y-3">
            {data.map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-2xl shadow flex items-center justify-between hover:shadow-md transition">
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  {/* AVATAR */}
                  <div className="relative">
                    <img src="/images/profile.png" alt="" className="w-12 h-12 rounded-full object-cover border-2 border-blue-200" />

                    {/* ONLINE DOT */}
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>

                  {/* INFO */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <Link to={`https://wa.me/${item.phone}`} target="_blank" className="bg-green-500 text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow hover:bg-green-600 transition">
                  Chat
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterNav />
    </>
  );
}
