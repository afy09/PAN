import { NavLink } from "react-router-dom";
import { FaHome, FaBullhorn, FaHandsHelping, FaStore, FaUsers } from "react-icons/fa";

export default function FooterNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center z-50">
      {/* CONTAINER */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl  py-2 flex justify-between items-center">
        <MenuItem to="/aspirasi" icon={<FaBullhorn />} label="Aspirasi" />
        <MenuItem to="/bantuan" icon={<FaHandsHelping />} label="Bantuan" />
        <MenuItem to="/" icon={<FaHome />} label="Home" />
        <MenuItem to="/umkm" icon={<FaStore />} label="UMKM" />
        <MenuItem to="/relawan" icon={<FaUsers />} label="Relawan" />
      </div>
    </div>
  );
}

function MenuItem({ to, icon, label }: any) {
  return (
    <NavLink to={to} className="flex-1 flex justify-center">
      {({ isActive }) => (
        <div className="flex flex-col items-center relative">
          {/* ICON */}
          <div className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${isActive ? "bg-blue-600 text-white -translate-y-5 shadow-lg" : "text-gray-400"}`}>
            <span className="text-lg">{icon}</span>
          </div>

          {/* LABEL */}
          <span className={`text-[10px]  transition ${isActive ? "text-blue-600 font-semibold" : "text-gray-400"}`}>{label}</span>
        </div>
      )}
    </NavLink>
  );
}
