import React from "react";
import { useParallaxTransform } from "../hooks/useParallax";

const Banner: React.FC = () => {
  const parallaxTransform = useParallaxTransform(0.3);

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center text-center position-relative banner-parallax"
      style={{
        color: "white",
        background: `linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(247, 147, 30, 0.8) 100%), url('/img/banner.jpeg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Opak overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* İçerik */}
      <div
        className="container position-relative"
        style={{ zIndex: 2, ...parallaxTransform }}
      >
        <h2 className="display-6 text-white">
          Hayalinizdeki IT Kariyeri Burada Başlıyor!
        </h2>
        <h1 className="display-1 text-white">ZeTech</h1>
        <a href="#services">
          <button type="button" className="btn btn-danger btn-lg">
            Hizmetlerimizi Keşfedin
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
