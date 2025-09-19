import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Portfolio />
      <AboutUs />
      <OurTeam />
      <Clients />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
