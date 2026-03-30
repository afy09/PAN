import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const NavbarDumai = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* ================= TOPBAR ================= */}
      <div className="hidden md:flex justify-between items-center bg-gray-100 text-gray-600 text-sm px-6  py-2 ">
        <div className="flex items-center gap-6">
          <span>📞 0811122882233</span>
          <span>✉️ diskominfo@dumai.go.id</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="mr-2">Follow Us On:</span>
          <FiFacebook className="cursor-pointer" />
          <FiInstagram className="cursor-pointer" />
          <FiYoutube className="cursor-pointer" />
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white shadow-sm">
        <div className=" px-4 md:px-6 lg:px-10 h-[74px] flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/images/kotadumai.jpg" alt="Dumai" className="h-14 md:h-16 object-contain" />
            <div className="hidden sm:block">
              <p className="text-4xl font-semibold text-green-700 leading-none">Dumai</p>
              <hr />
              <p className="text-xs text-gray-500 text-center">Kota Idaman</p>
            </div>
          </NavLink>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-green-600">
              Beranda
            </NavLink>
            <NavLink to="/umkm" className="hover:text-green-600">
              UMKM
            </NavLink>
            <NavLink to="/" className="hover:text-green-600">
              Berita
            </NavLink>
            <NavLink to="/" className="hover:text-green-600">
              Perangkat Daerah
            </NavLink>
            <NavLink to="/" className="hover:text-green-600">
              CCTV
            </NavLink>
            <NavLink to="/" className="hover:text-green-600">
              E-Government
            </NavLink>
            <NavLink to="/" className="hover:text-green-600">
              FAQ
            </NavLink>
          </nav>

          {/* RIGHT BUTTON */}
          <div className="hidden lg:flex items-center">
            <NavLink to="/" className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-full font-semibold transition">
              Masuk
            </NavLink>
          </div>

          {/* HAMBURGER */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`lg:hidden fixed top-[74px] left-0 w-full bg-white shadow-md transition-all duration-300 ${open ? "max-h-screen py-6" : "max-h-0 overflow-hidden"}`}>
        <div className="flex flex-col items-center gap-5 text-gray-700 font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Beranda
          </NavLink>
          <NavLink to="/umkm" onClick={() => setOpen(false)}>
            UMKM
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Berita
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Perangkat Daerah
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            CCTV
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            E-Government
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            FAQ
          </NavLink>

          <NavLink to="/" className="bg-green-700 text-white px-6 py-2 rounded-full" onClick={() => setOpen(false)}>
            Masuk
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavbarDumai;
