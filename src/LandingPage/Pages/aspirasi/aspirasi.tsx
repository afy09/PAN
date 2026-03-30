import { useState } from "react";
import FooterNav from "../../Components/Footer";

export function Aspirasi() {
  const [text, setText] = useState("");

  const dummy = [
    {
      name: "Ahmad Fauzi",
      date: "1 jam lalu",
      text: "Perbaikan jalan rusak di desa",
    },
    {
      name: "Siti Aminah",
      date: "2 jam lalu",
      text: "Penambahan lampu jalan di gang kecil",
    },
    {
      name: "Budi Santoso",
      date: "3 jam lalu",
      text: "Bantuan UMKM lokal agar berkembang",
    },
    {
      name: "Dewi Lestari",
      date: "5 jam lalu",
      text: "Perlu adanya tempat sampah umum",
    },
    {
      name: "Rizky Pratama",
      date: "Kemarin",
      text: "Perbaikan drainase saat musim hujan",
    },
    {
      name: "Andi Wijaya",
      date: "2 hari lalu",
      text: "Program pelatihan kerja untuk pemuda",
    },
  ];

  return (
    <>
      <div className="flex justify-center bg-white min-h-screen font-signika">
        <div className="max-w-md w-full bg-[#f5f8ff] min-h-screen pb-24">
          {/* HEADER */}
          {/* HEADER */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-400 text-white p-4 rounded-b-3xl shadow flex items-center gap-3">
            <div>
              <img src="/images/pan.png" alt="" className="w-8 h-10 object-contain" />
            </div>

            <div>
              <h1 className="text-lg font-bold">Aspirasi Masyarakat</h1>
              <p className="text-xs opacity-80">Sampaikan Pendapatmu</p>
            </div>
          </div>

          {/* FORM */}
          <div className="p-4">
            <div className="bg-white p-3 rounded-2xl shadow">
              <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Tulis aspirasi kamu..." className="w-full text-sm outline-none resize-none" rows={3} />

              <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl shadow hover:bg-blue-700 transition">Kirim Aspirasi</button>
            </div>
          </div>

          {/* LIST */}
          <div className="px-4">
            <h2 className="font-semibold mb-3 text-gray-700">Aspirasi Terbaru</h2>

            <div className="space-y-3">
              {dummy.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm">
                  {/* HEADER USER */}
                  <div className="flex items-center gap-3 mb-2">
                    <img src="/images/profile.png" alt="" className="w-10 h-10 rounded-full object-cover" />

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>

                  {/* ISI ASPIRASI */}
                  <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterNav />
    </>
  );
}
