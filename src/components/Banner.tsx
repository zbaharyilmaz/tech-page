import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center text-center position-relative"
      style={{
        background: 'url("/img/banner.jpeg") center center no-repeat',
        backgroundSize: "cover",
        color: "white",
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
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="display-6 text-white">
          Hayalinizdeki IT Kariyeri Burada Başlıyor!
        </h2>
        <h1 className="display-1 text-white">
          ZeTech
        </h1>
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
