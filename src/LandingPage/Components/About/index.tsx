import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const apps = [
  {
    name: "Sistem Informasi Lingkungan Hidup",
    logo: "/images/logo/ikon_1.png",
    kategori: "Pelayanan Publik",
    deskripsi: "Aplikasi layanan informasi lingkungan hidup Kota Dumai yang menyediakan data kualitas udara, air, dan laporan masyarakat terkait lingkungan.",
  },
  {
    name: "CCTV Dumai",
    logo: "/images/logo/ikon_2.png",
    kategori: "Pelayanan Publik",
    deskripsi: "Pantau kondisi lalu lintas dan keamanan Kota Dumai secara realtime melalui jaringan CCTV publik.",
  },
  {
    name: "Layanan Kependudukan Kota Dumai",
    logo: "/images/logo/ikon_3.png",
    kategori: "Pelayanan Publik",
    deskripsi: "Layanan administrasi kependudukan seperti KTP, KK, Akta Kelahiran, dan dokumen penting lainnya secara online.",
  },
  {
    name: "Layanan Kelurahan dan Kecamatan",
    logo: "/images/logo/ikon_4.png",
    kategori: "Pemerintahan",
    deskripsi: "Portal pelayanan kelurahan dan kecamatan untuk pengajuan surat-menyurat dan layanan administratif wilayah.",
  },
  {
    name: "Solusi UMKM",
    logo: "/images/logo/ikon_6.png",
    kategori: "Layanan Masyarakat",
    deskripsi: "Platform pendampingan UMKM untuk pemasaran, perizinan, pembiayaan, dan pengembangan usaha lokal.",
  },
  {
    name: "e-Metrologi",
    logo: "/images/logo/ikon_7.png",
    kategori: "Perencanaan",
    deskripsi: "Aplikasi pelayanan tera dan tera ulang alat ukur perdagangan untuk memastikan keakuratan transaksi.",
  },
  {
    name: "Pollink Gaul",
    logo: "/images/logo/ikon_8.png",
    kategori: "Layanan Masyarakat",
    deskripsi: "Aplikasi kreatif anak muda Kota Dumai untuk edukasi, partisipasi publik, dan pengembangan potensi generasi muda.",
  },
  {
    name: "Smart Posyandu",
    logo: "/images/logo/ikon_12.png",
    kategori: "Statistik",
    deskripsi: "Sistem pencatatan digital kegiatan posyandu untuk pemantauan kesehatan ibu dan anak secara terpadu.",
  },
];

const menu = ["Semua", "Pelayanan Publik", "Statistik", "Perencanaan", "Layanan Masyarakat", "Pemerintahan"];

const RekomendasiApp = () => {
  const [activeKategori, setActiveKategori] = useState("Semua");
  const [selectedApp, setSelectedApp] = useState<any>(null);

  const filteredApps = activeKategori === "Semua" ? apps : apps.filter((app) => app.kategori === activeKategori);

  return (
    <section className="relative w-full overflow-hidden -mt-6 md:-mt-10">
      <div
        className="relative max-w-[1440px] mx-auto bg-[#f5f8f6]
        rounded-t-[40px] md:rounded-t-[70px]
        px-4 py-6 md:px-10 md:py-10 overflow-hidden">
        {/* BG GEDUNG */}
        <img
          src="/images/gedung.png"
          alt=""
          className="absolute bottom-0 left-0 w-full opacity-35
          pointer-events-none select-none z-0"
        />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* BADGE */}
          <div className="flex justify-center mb-8">
            <div
              className="flex items-center gap-2 bg-[#e7f3ed]
              text-green-800 px-6 py-2 rounded-full
              text-xs md:text-sm font-semibold tracking-wide shadow">
              INFORMASI APLIKASI PUBLIK
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* SIDEBAR */}
            <aside className="md:col-span-3">
              <div
                className="bg-gradient-to-b from-[#a7e0c4] to-transparent
                rounded-3xl p-4 md:p-5">
                {/* JUDUL */}
                <div className="flex justify-center gap-3 items-center mb-4">
                  <div className="bg-amber-500 w-full h-1 rounded-full opacity-20" />
                  <div className="text-green-800 text-xl md:text-2xl font-semibold">Kategori</div>
                  <div className="bg-amber-500 w-full h-1 rounded-full opacity-20" />
                </div>

                <ul className="space-y-2">
                  {menu.map((item, i) => {
                    const active = item === activeKategori;
                    return (
                      <li key={i}>
                        <button
                          onClick={() => setActiveKategori(item)}
                          className={`w-full text-left px-5 py-3 rounded-full
                            text-sm font-semibold transition
                            ${active ? "bg-[#f4b740] text-white shadow" : "text-gray-700 hover:bg-green-100"}`}>
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* CONTENT */}
            <div className="md:col-span-9">
              {/* SEARCH (UI ONLY) */}
              <div className="flex gap-3 mb-6">
                <input
                  placeholder="Cari*"
                  className="flex-1 bg-white rounded-full
                  px-5 py-3 text-sm outline-none
                  shadow-inner border border-gray-100"
                />
                <button
                  className="border border-green-900 text-green-900
                  transition px-6 rounded-full shadow">
                  <IoIosSearch />
                </button>
              </div>

              {/* GRID APPS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredApps.map((app, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedApp(app)}
                    className="group bg-white text-left
                    rounded-[28px] p-4 md:p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                    transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-16 h-16 md:w-20 md:h-20
                        rounded-full bg-[#eef6f2]
                        flex items-center justify-center">
                        <img src={app.logo} alt={app.name} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                      </div>
                    </div>

                    <p
                      className="text-center text-xs md:text-sm
                      font-semibold text-gray-800 leading-snug">
                      {app.name}
                    </p>

                    <p
                      className="text-center text-[10px] md:text-xs
                      text-[#f4b740] mt-1 font-medium">
                      {app.kategori}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL DETAIL APP ================= */}
      {selectedApp && (
        <div onClick={() => setSelectedApp(null)} className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full rounded-3xl p-6 md:p-8 shadow-2xl
            animate-[fadeIn_0.2s_ease-out]">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-[#eef6f2] flex items-center justify-center">
                <img src={selectedApp.logo} alt={selectedApp.name} className="w-14 h-14 object-contain" />
              </div>
            </div>

            <h3 className="text-center text-lg md:text-xl font-bold text-gray-800 mb-2">{selectedApp.name}</h3>

            <p className="text-center text-sm text-gray-600 leading-relaxed mb-6">{selectedApp.deskripsi}</p>

            <div className="flex justify-center">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-6 py-2 rounded-full bg-green-700 hover:bg-green-800
                transition text-white text-sm font-semibold shadow">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RekomendasiApp;
