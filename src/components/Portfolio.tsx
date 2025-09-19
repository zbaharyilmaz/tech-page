import React from "react";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/img/student1.jpg",
      title: "Frontend Development",
      description:
        "Modern web technologies ile responsive ve kullanıcı dostu arayüzler geliştiriyoruz.",
    },
    {
      id: 2,
      image: "/img/student2.jpg",
      title: "Backend Development",
      description:
        "Güvenli ve ölçeklenebilir sunucu uygulamaları ve API'ler tasarlıyoruz.",
    },
    {
      id: 3,
      image: "/img/student3.jpg",
      title: "Mobile Development",
      description:
        "iOS ve Android platformları için native ve cross-platform uygulamalar geliştiriyoruz.",
    },
    {
      id: 4,
      image: "/img/student4.jpg",
      title: "Database Management",
      description:
        "Veritabanı tasarımı ve optimizasyonu ile veri yönetimi konularında uzmanlaşıyoruz.",
    },
    {
      id: 5,
      image: "/img/student5.jpg",
      title: "Cloud Computing",
      description:
        "AWS, Azure ve Google Cloud platformlarında bulut çözümleri geliştiriyoruz.",
    },
    {
      id: 6,
      image: "/img/student6.jpg",
      title: "DevOps & Automation",
      description:
        "CI/CD pipeline'ları ve otomasyon süreçleri ile modern yazılım geliştirme.",
    },
  ];

  return (
    <div
      className="container-fluid text-center py-5 fade-in-up portfolio-parallax"
      id="portfolio"
    >
      <h1 className="display-3">Portföy</h1>
      <p>
        ZeTech öğrencilerimizin geliştirdiği projeleri keşfedin. Modern
        teknolojiler kullanarak hayata geçirdikleri başarılı uygulamalar ve
        çözümler.
      </p>
      <div className="container">
        <div className="row mt-3 g-3">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-4">
              <div className="card h-100 parallax-element">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
