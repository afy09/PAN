import { NavLink } from "react-router-dom";

const HeroUmkm = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5fa] h-[300px] md:h-[380px]  pt-10">
      {/* BACKGROUND GEDUNG */}
      <img src="/images/gedung.png" alt="" className="absolute bottom-0 left-0 w-full h-[500px] object-cover opacity-70  pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6  md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-start">
              <span className="text-blue-950">UMKM Mart</span> <span className="text-blue-100">PAN</span>
            </h1>
            <hr />

            <p className="mt-4 text-gray-200 text-xs md:text-lg max-w-xl text-center md:text-start">Marketplace untuk mempromosikan dan menjual produk UMKM lokal</p>

            <div className="hidden xl:block mt-4">
              <button className="bg-blue-900 text-white px-7 py-3 rounded-full">Unduh Aplikasi Mobile</button>
            </div>
          </div>

          {/* IMAGE TOKO */}
          <div className="flex justify-center md:justify-end mt-5 md:mt-0">
            <img src="/images/umkm.png" alt="UMKM Mart Dumai" className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroUmkm;
