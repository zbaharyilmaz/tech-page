import React from "react";

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Google",
      logo: "/img/google-logo.png",
      url: "https://www.google.com/",
    },
    { name: "IBM", logo: "/img/ibm-logo.png", url: "https://www.ibm.com/" },
    {
      name: "Amazon",
      logo: "/img/amazon-logo.png",
      url: "https://www.amazon.com/",
    },
  ];

  return (
    <div className="container-fluid d-flex justify-content-evenly align-items-center flex-wrap gap-2 py-5">
      {clients.map((client, index) => (
        <a
          key={index}
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={client.logo} alt={client.name} width="100px" />
        </a>
      ))}
    </div>
  );
};

export default Clients;
