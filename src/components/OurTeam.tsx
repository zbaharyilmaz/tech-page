import React from "react";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Senior Web Development Eğitmeni",
      image: "/img/teacher1.jpg",
    },
    {
      id: 2,
      name: "Noah Blien",
      position: "FullStack Development Eğitmeni",
      image: "/img/teacher2.png",
    },
    {
      id: 3,
      name: "Watson Simon",
      position: "Mobile Development Eğitmeni",
      image: "/img/teacher3.png",
    },
  ];

  return (
    <div className="container-fluid text-center py-5 team-parallax" id="team">
      <h1 className="display-3">Ekibimiz</h1>
      <p>
        ZeTech'in deneyimli ve uzman eğitmen kadrosu, teknoloji dünyasında
        başarılı olmak isteyen öğrencilere rehberlik ediyor.
      </p>
      <div className="container">
        <div className="row mt-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-sm-12 col-md-4">
              <img
                className="rounded-circle team"
                src={member.image}
                alt={member.name}
                width="260px"
              />
              <h4 className="mt-3">{member.name}</h4>
              <p>{member.position}</p>
              <p>
                <button
                  type="button"
                  className="social btn btn-dark border border-dark rounded-circle m-1 text-white"
                  title={`${member.name} Twitter`}
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  className="social btn btn-dark border border-dark rounded-circle m-1 text-white"
                  title={`${member.name} Facebook`}
                >
                  <i className="fab fa-facebook"></i>
                </button>
                <button
                  type="button"
                  className="social btn btn-dark border border-dark rounded-circle m-1 text-white"
                  title={`${member.name} LinkedIn`}
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
