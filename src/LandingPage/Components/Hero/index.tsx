import { NavLink } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "Surat Elektronik TND",
    icon: "/images/logo/ikon_1.png",
    description: "Layanan pengelolaan surat elektronik resmi untuk mendukung administrasi pemerintahan Kota Dumai.",
  },
  {
    title: "CCTV",
    icon: "/images/logo/ikon_2.png",
    description: "Pemantauan kondisi kota secara real-time melalui jaringan CCTV terintegrasi.",
  },
  {
    title: "Layanan Kependudukan Kota Dumai",
    icon: "/images/logo/ikon_3.png",
    description: "Layanan administrasi kependudukan seperti KTP, KK, akta kelahiran, dan dokumen resmi lainnya.",
  },
  {
    title: "Layanan Kelurahan dan Kecamatan",
    icon: "/images/logo/ikon_4.png",
    description: "Pelayanan publik tingkat kelurahan dan kecamatan untuk mempermudah urusan masyarakat.",
  },
  {
    title: "Layanan Kesehatan RSUD Kota Dumai",
    icon: "/images/logo/ikon_5.png",
    description: "Informasi dan layanan kesehatan dari RSUD Kota Dumai secara digital.",
  },
];

const HeroDumai = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="relative overflow-hidden bg-[#f7f5fa] -mt-2">
      {/* BACKGROUND GEDUNG */}
      <img src="/images/gedung.png" className="absolute bottom-0 left-0 w-full h-[700px] pointer-events-none" alt="" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl md:text-6xl">
            <span className="text-green-700">Dumai</span> <span className="text-amber-500">Berkhitmad</span>
          </h1>

          <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg">Portal Aplikasi Pemerintah Kota Dumai untuk memberikan layanan langsung semua masyarakat di Kota Dumai</p>
        </div>

        {/* CARDS */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {services.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setSelectedService(item)}
                className={`
  bg-white
  rounded-2xl
  p-4 sm:p-5 md:p-6
  shadow-md
  hover:shadow-xl
  transition
  text-center
  cursor-pointer
  focus:outline-none
  ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}
`}>
                <div className="flex justify-center mb-3">
                  <img src={item.icon} alt="" className="w-14 h-14 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain" />
                </div>

                <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-tight">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <NavLink
            to="/download"
            className="
              bg-green-700
              hover:bg-green-800
              text-white
              px-6 sm:px-8 md:px-10
              py-3
              rounded-full
              text-sm sm:text-base md:text-lg
              shadow-lg
              transition
            ">
            Unduh Aplikasi Mobile Dumai Berkhitmad
          </NavLink>
        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>

            <div className="text-center">
              <img src={selectedService.icon} alt="" className="w-16 h-12 mx-auto mb-4" />

              <h3 className="text-lg font-semibold text-gray-800">{selectedService.title}</h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{selectedService.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroDumai;
