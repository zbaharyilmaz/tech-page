import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container-fluid text-center py-5" id="about">
      <h1 className="display-3">Hakkımızda</h1>
      <p>
        ZeTech, teknoloji dünyasında başarılı olmak isteyen öğrencilere kapsamlı
        eğitim ve rehberlik hizmeti veren öncü bir eğitim kurumudur.
      </p>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 text-start">
            <p>
              <strong>Misyonumuz:</strong> Teknoloji alanında kaliteli eğitim
              vererek, öğrencilerimizin sektörde başarılı profesyoneller
              olmalarını sağlamak.
            </p>
            <p>
              <strong>Vizyonumuz:</strong> Türkiye'nin en saygın teknoloji
              eğitim kurumu olmak ve teknoloji sektörüne nitelikli insan kaynağı
              kazandırmak.
            </p>
            <p>
              <strong>Değerlerimiz:</strong> İnovasyon, kalite, şeffaflık ve
              öğrenci odaklı yaklaşım ile eğitimde mükemmellik hedefliyoruz.
            </p>
            <p>
              <strong>Başarılarımız:</strong> 5000+ mezunumuz teknoloji
              sektöründe başarıyla çalışmakta ve 95% işe yerleşme oranına
              sahibiz.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              className="keyboard object-fit-cover"
              src="/img/keyboard.jpeg"
              alt=""
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
