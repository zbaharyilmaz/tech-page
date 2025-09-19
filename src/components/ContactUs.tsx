import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen tüm gerekli alanları doldurun!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.warning("Lütfen geçerli bir e-posta adresi girin!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Show loading toast
    toast.loading("Mesajınız gönderiliyor...", {
      position: "top-right",
      toastId: "loading-toast",
    });

    // Simulate form submission with delay
    setTimeout(() => {
      toast.dismiss("loading-toast");
      toast.success(
        "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }, 2000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      className="container-fluid contact text-center py-5 text-white"
      id="contact"
    >
      <h1 className="display-3">İletişim</h1>
      <p>
        ZeTech hakkında daha fazla bilgi almak veya eğitim programlarımızla
        ilgili sorularınız için bizimle iletişime geçin. Size en kısa sürede
        dönüş yapacağız.
      </p>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control form-control-lg"
                placeholder="Ad Soyad"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control form-control-lg mt-3"
                placeholder="E-posta Adresi"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control form-control-lg mt-3"
                placeholder="Telefon Numarası"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control form-control-lg"
                rows={6}
                placeholder="Mesajınız"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-danger btn-lg mt-3">
            Mesaj Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
