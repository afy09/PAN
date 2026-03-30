import React from "react";
import NavbarDumai from "../../Components/Navbar";
import HeroUmkm from "../../Components/HeroUmkm/heroumkm";
import UMKMProduk from "../../Components/HeroUmkm/produkUmkm";
import Footer from "../../Components/Footer";

const PageUmkm = () => {
  return (
    <>
      <div className="font-signika max-w-[1440px] mx-auto bg-[#f5f8f6]">
        <div>
          <HeroUmkm />
        </div>
        <div>
          <UMKMProduk />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageUmkm;
