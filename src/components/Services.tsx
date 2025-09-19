import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container text-center py-5 fade-in-up" id="services">
      <h1 className="display-3">Hizmetlerimiz</h1>
      <p>
        ZeTech olarak, teknoloji dünyasında başarılı olmak isteyen öğrencilere
        kapsamlı eğitim programları ve modern teknoloji çözümleri sunuyoruz.
      </p>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-4">
          <span className="icon btn btn-danger rounded-circle">
            <i className="fas fa-code fa-5x mt-4"></i>
          </span>
          <h3 className="mt-4">Yazılım Geliştirme</h3>
          <p>
            Modern programlama dilleri ve framework'ler ile full-stack web
            uygulamaları geliştirme eğitimleri veriyoruz.
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <span className="icon btn btn-danger rounded-circle">
            <i className="fas fa-palette fa-5x mt-4"></i>
          </span>
          <h3 className="mt-4">UI/UX Tasarım</h3>
          <p>
            Kullanıcı deneyimi odaklı tasarım prensipleri ve modern tasarım
            araçları ile etkileyici arayüzler tasarlıyoruz.
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <span className="icon btn btn-danger rounded-circle">
            <i className="fas fa-network-wired fa-5x mt-4"></i>
          </span>
          <h3 className="mt-4">Siber Güvenlik</h3>
          <p>
            Network güvenliği, etik hacking ve siber güvenlik alanında uzman
            eğitim programları sunuyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
