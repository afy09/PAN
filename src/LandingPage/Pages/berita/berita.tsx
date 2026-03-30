import FooterNav from "../../Components/Footer";

export function BeritaPage() {
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
              <h1 className="text-lg font-bold">Berita & Agenda</h1>
              <p className="text-xs opacity-80">Lihat Berita & Agenda Terbaru</p>
            </div>
          </div>

          {/* LIST BERITA */}
          <div className="p-4 space-y-4">
            {berita.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
                {/* IMAGE */}
                <div className="relative">
                  <img src={item.image} alt="" className="w-full h-40 object-cover" />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* TIME BADGE */}
                  <span className="absolute top-2 right-2 bg-white/90 text-[10px] px-2 py-1 rounded-full text-gray-700">{item.time}</span>

                  {/* TITLE */}
                  <h2 className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold leading-snug">{item.title}</h2>
                </div>

                {/* FOOTER */}
                <div className="p-3 flex justify-between items-center">
                  <p className="text-xs text-gray-500">Berita PAN Peduli</p>

                  <button className="text-xs text-blue-600 font-semibold">Baca →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterNav />
    </>
  );
}
