import FooterNav from "../../Components/Footer";

export function Bantuan() {
  const donasi = [
    {
      title: "Bantuan Banjir",
      target: 10000000,
      terkumpul: 5000000,
      image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Donasi Pendidikan Anak",
      target: 8000000,
      terkumpul: 3500000,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bantuan Rumah Layak Huni",
      target: 12000000,
      terkumpul: 6000000,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Santunan Anak Yatim",
      target: 7000000,
      terkumpul: 2000000,
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const formatRupiah = (num: number) => {
    return "Rp " + num.toLocaleString("id-ID");
  };

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
              <h1 className="text-lg font-bold">Bantuan & Donasi</h1>
              <p className="text-xs opacity-80">Mari bantu sesama ❤️</p>
            </div>
          </div>

          {/* LIST DONASI */}
          <div className="p-4 space-y-4">
            {donasi.map((item, i) => {
              const persen = Math.round((item.terkumpul / item.target) * 100);

              return (
                <div key={i} className="bg-white rounded-2xl shadow overflow-hidden">
                  {/* IMAGE */}
                  <div className="relative">
                    <img alt="" src={item.image} className="w-full h-36 object-cover" />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* TITLE */}
                    <h2 className="absolute bottom-2 left-3 text-white text-sm font-semibold">{item.title}</h2>
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">
                    {/* PROGRESS */}
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${persen}%` }}></div>
                    </div>

                    {/* INFO */}
                    <div className="flex justify-between text-xs mt-2 text-gray-500">
                      <span>{formatRupiah(item.terkumpul)}</span>
                      <span>{persen}%</span>
                    </div>

                    <p className="text-xs text-gray-400">dari {formatRupiah(item.target)}</p>

                    {/* BUTTON */}
                    <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Donasi Sekarang</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FooterNav />
    </>
  );
}
