import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const categories = [
  { name: "Semua Produk", icon: "🏠" },
  { name: "Kuliner", icon: "🍜" },
  { name: "Fashion", icon: "👕" },
  { name: "Kerajinan", icon: "🧺" },
  { name: "Jasa", icon: "🛠️" },
];

const products = [
  {
    id: 1,
    name: "Banana Chip Dumai",
    price: "Rp 15.000",
    category: "Kuliner",
    image: "https://images.unsplash.com/photo-1597756900701-6212474594ef?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rendang Daging Sapi Amanah",
    price: "Rp 12.000",
    category: "Kuliner",
    image: "https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Keripik Pisang Amanah",
    price: "Rp 12.000",
    category: "Kuliner",
    image: "https://plus.unsplash.com/premium_photo-1663854478810-26b620ade38a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Sambalado Uni Darti",
    price: "Rp 5.000",
    category: "Kuliner",
    image: "https://images.unsplash.com/photo-1630315500315-43112e2bfd88?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Kue Kacang Ria Jaya",
    price: "Rp 12.000",
    category: "Kuliner",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Tas Rajut Handmade",
    price: "Rp 85.000",
    category: "Kerajinan",
    image: "https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Kaos UMKM Dumai",
    price: "Rp 75.000",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1657364891013-8324e4db9dc9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Topi Bordir Lokal",
    price: "Rp 45.000",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Anyaman Rotan Premium",
    price: "Rp 120.000",
    category: "Kerajinan",
    image: "https://images.unsplash.com/photo-1685111674777-25bcc8ab3b5d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Jasa Servis AC",
    price: "Rp 50.000",
    category: "Jasa",
    image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const UMKMProduk = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Produk");

  const filteredProducts = activeCategory === "Semua Produk" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section className="-mt-4 md:-mt-7 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14">
        {/* SEARCH */}
        <div className="bg-white rounded-full shadow-md px-4 py-3 flex items-center gap-3 w-full md:w-[50%]">
          <IoIosSearch className="text-gray-400 text-xl" />
          <input placeholder="Cari*" className="flex-1 outline-none text-sm sm:text-base bg-transparent" />
        </div>

        {/* CATEGORY */}
        <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const active = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium shadow-sm transition
                  ${active ? "bg-blue-700 text-white" : "bg-white text-gray-700 hover:bg-blue-100"}`}>
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-3 shadow-md hover:shadow-xl transition cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition" />
              </div>

              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug line-clamp-2">{item.name}</h3>

              <p className="mt-1 text-xs sm:text-sm font-bold text-blue-700">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UMKMProduk;
